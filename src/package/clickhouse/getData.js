const ClickHouse = require("@apla/clickhouse");
const {
  assign,
  groupBy,
  each,
  chain,
  map,
  startsWith,
  replace,
  words,
} = require("lodash");
const { bool } = require("prop-types");
// node .\src\package\clickhouse\getData.js

const options = {
  host: "192.168.93.14",
  port: "8123",
  user: "default",
  password: "qwerty",
};

const ch = new ClickHouse(
  assign(options, {
    dataObjects: true,
    queryOptions: { database: "rp_manager" },
  })
);

function evaluate(code, context_data) {
  const context = {};

  const setContext = (acc, name = "") => {
    // 用双引号包裹的先去除
    let mark = false;
    if (/'.*?'/.test(acc)) {
      acc = acc.replaceAll("'", "");
      mark = true;
    }
    console.log(acc);

    let valObj;
    if (context_data[acc]) {
      valObj = context_data[acc];
    } else {
      if (startsWith(acc, "年化")) {
        const key = replace(acc, "年化", "");
        valObj = context_data[key];
      }

      if (startsWith(acc, "平均")) {
        const key = replace(acc, "平均", "");
        valObj = context_data[key];
      }
    }
    console.log(valObj);
    /**
     * 第一种情况是在 context_data 中直接找到
     * 第二种是没找到 ''包裹住 视为整体0
     * 第三种单个acc没找到 视为0
     */
    if (valObj) {
      context[name || acc] = valObj;
    } else if (mark) {
      valObj = true;
      context[name || acc] = { value: 0, value_ytd: 0, value_avg: 0 };
    } else {
      context[name || acc] = { value: 0, value_ytd: 0, value_avg: 0 };
    }
    // console.log(valObj);
    return valObj;
  };
  code = map(code.split(" "), (item, index) => {
    if (item) {
      let name = "";
      if (startsWith(item, "平均")) {
        name = `平均_${index}`;
      } else if (startsWith(item, "年化")) {
        name = `年化_${index}`;
      } else {
        name = `_${index}`;
      }
      // console.log(item);
      // console.log(name);
      if (setContext(item, name)) {
        return name;
      }
    }
    return item;
  }).join(" ");
  console.log(context);
  // console.log(code);
  code = code.replace(/（/g, "(").replace(/）/g, ")");
  code = code.replace(/%/g, "");
  const accs = words(code);
  // console.log(accs);
  each(accs, (acc) => {
    if (isNaN(+acc)) {
      setContext(acc);
    }
  });
  console.log(context);

  let value, value_ytd, value_avg;
  const errors = [];

  try {
    value = function evaluateEval() {
      const getValPath = (acc) => {
        if (startsWith(acc, "年化")) {
          return `this.${acc}.value_ytd || this.${acc}.value || 0`;
        } else if (startsWith(acc, "平均")) {
          return `this.${acc}.value_avg || this.${acc}.value || 0`;
        } else {
          return `this.${acc}.value || 0`;
        }
      };
      const argsStr = map(context, (v, k) => `${k} = ${getValPath(k)}`).join(
        ","
      );
      const argsDef = argsStr ? `let ${argsStr};` : "";
      console.log(`${argsDef}${code}`);

      return eval(`${argsDef}${code}`);
    }.call(context);
    // console.log(context);
  } catch (e) {
    errors.push(e.message);
  }
  console.log({ value, value_ytd, value_avg });
  return {
    result: { value, value_ytd, value_avg },
    error: errors.join(","),
    context,
  };
}

let formula =
  "净利润 +( '财务费用-汇兑损益' -( '投资收益-汇率套保工具损益' + 公允价值变动损益汇率套保工具损益 ))*0.75";
async function getData() {
  const { data } = await ch.querying(
    "select * from rp_manager.v_bpc_sap_pre_index vbspi where year = '2023' and branch ='振华物流集团' and ym = '202301' and acc in ('净利润','财务费用','汇兑损益','财务费用-汇兑损益','投资收益-汇率套保工具损益','公允价值变动损益汇率套保工具损益', '投资收益', '汇率套保工具损益')"
  );
  let result = groupBy(
    data,
    ({ branch, year, month, prod }) => `${branch}_${year}_${month}_${prod}`
  );
  each(result, (group_data) => {
    const context_data = {};
    chain(group_data)
      .each(({ acc, value, value_ytd, value_avg }) => {
        context_data[acc] = { value, value_ytd, value_avg };
      })
      .value();
    console.log(context_data);
    const {
      result: { value, value_ytd, value_avg },
      error,
      context,
    } = evaluate(formula, context_data);
    console.log({ value, value_ytd, value_avg });
  });
}

getData();

// 0.12445005698827737
