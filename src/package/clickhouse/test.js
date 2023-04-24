const { assign, groupBy, each, chain, map } = require("lodash");


const setContext = (acc, name = "") => {
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

    if (valObj) {
      context[name || acc] = valObj;
    }
    return valObj;
  };


const string =  '平均资产合计-平均长期资产-(平均货币资金+平均应收票据+平均应收款项融资+平均应收账款+平均合同资产+平均其他应收款+平均存货)  fds'
string = map(string.split(' '), (item, index)=>{
    if (item) {
        const name = `_${index}`;
        if (setContext(item, name)) {
          return name;
        }
      }
      return item;
}).join(" ");
console.log(string);