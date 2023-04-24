let context = {
    '平均营业收入': { value: 909.9, value_ytd: 909.9, value_avg: 303.3 },
    '平均货币资金': { value: 6.266, value_ytd: 6.266, value_avg: 2.088 }
  };

let value = function test() {
  console.log(this);
  let str = eval(`let 平均营业收入 = this.平均营业收入.value_avg || this.平均营业收入.value || 0,平均货币资金 = this.平均货币资金.value_avg || this.平均货币资金.value || 0;平均营业收入*12/平均货币资金`)
  console.log(str);
}.call(context);
