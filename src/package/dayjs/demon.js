const {range,map} = require('lodash')
const dayjs = require('dayjs')
console.log(dayjs());
const months = map(range(1, 13), (i) =>
  dayjs().subtract(i, "month").format("YYYYMM")
);
console.log(months);