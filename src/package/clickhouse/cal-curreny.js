const {
  assign,
  groupBy,
  each,
  chain,
  map,
  startsWith,
  replace,
  isArray,
  words,
  isNumber,
  padStart,
  find,
  uniq
} = require("lodash");
const ClickHouse = require("@apla/clickhouse");

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

function evalInContext(js, context) {
  return function () {
    const assignStr = map(context, (v, k) => `${k} = this.${k}`).join(",");
    const def = assignStr ? `let ${assignStr};` : "";
    return eval(`${def}${js}`);
  }.call(context);
}



const getParamsString = (params) =>
  map(params, (v, k) =>
    isArray(v)
      ? `${k} in (${map(v, (item) =>
          item?.startsWith("(") ? item : `'${item}'`
        ).join(",")})`
      : `${k}= ${isNumber(v) ? v : `'${v}'`}  `
  ).join(" and ");

  const select = async (sql, params)=> {
    const { data } = await ch.querying(
      `${sql} ${ ` ${getParamsString(params)} ` }`
    );
    console.log(`${sql} ${ ` ${getParamsString(params)} ` }`);
    // console.table(data.slice(0, 10));
    return data;
  }


void (async function () {


  let month = '202307';

  const y = month.substring(0, 4);
  const m = month.substring(4);
  const preYearEnd = `${+y - 1}12`;
  const preMonth = `${y}${padStart((+m - 1).toString(), 2, "0")}`;
  console.log(preYearEnd);
  console.log(preMonth);
  const config = [
    {
      table: "财务费用明细表",
      acc: null,
      val_1: "年累计-上月年累计",
      val_2: "年累计本位币*平均汇率",
    },
  ];

  const {data} = await ch.querying(
    `select * from rp_manager.bpc_src where  currency is not null and  currency<>'CNY'  and month='202307' and sap_code = '1376' and no =18  and table = '财务费用明细表'`
  );
  console.log(data);

  const rateConfig = await ch.querying(
    `select * from rp_manager.rate_detail where "会计期间"='202307'`
  );

  const getRate = (currency) => find(rateConfig.data, { 币种: currency });



  const currencyArr = uniq(map(data, "currency"));
  const sapCodeArr = uniq(map(data, "sap_code"));
  console.log(currencyArr, sapCodeArr);
  let preData = await select(`select * from rp_manager.bpc_src where `, {
    currency: "CNY",
    sap_code: sapCodeArr,
    table: '财务费用明细表',
    // no: 18,
    month: [preMonth, preYearEnd],
  });


  each(data, (item) => {
    
    const { table, acc, sap_code } = item;
    const 当月本位币 = item.val_1 || 0;
    const 年累计本位币 = item.val_2 || 0;

    const preItem = find(preData, {
      sap_code,
      table,
      acc,
      month: preMonth,
    });
    console.log(preItem);

    const 上月 = preItem?.val_1 || 0;
    const 上月年累计 = preItem?.val_2 || 0;

    const preYearEndItem = find(preData, {
      sap_code,
      table,
      acc,
      month: preYearEnd,
    });
    console.log(preYearEndItem);

    const 上年期末 = preYearEndItem?.val_1 || 0;
    const 上年期末年累计 = preYearEndItem?.val_2 || 0;


    const rate = getRate(item.currency);

    const context = {
      ...rate,
      当月本位币,
      年累计本位币,
      上月,
      上月年累计,
      上年期末,
      上年期末年累计,
    };

    const configItem = find(config, { table, acc }) || find(config, { table });
    try {
      const 年累计 = evalInContext(configItem.val_2, context);
      item.val_2 = 年累计;
      const 当月 = evalInContext(configItem.val_1, { ...context, 年累计 });
      item.val_1 = 当月;
      item.currency = "CNY";
    } catch (e) {
      console.log(item.currency);
      console.log(rate);
      console.log(context);
      console.log(configItem);
      console.log(e.message);
      throw e;
    }

    console.log(data);
  });
})();
