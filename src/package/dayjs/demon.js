const {range,map} = require('lodash')
const dayjs = require('dayjs')


const currentYear = dayjs().year();
const currentMonth = dayjs().month();

const yearMoth = range(0, currentMonth ).map(
    (i)=>{
        return dayjs().set('year', currentYear).set('month', i).format('YYYYMM')
    }
)
console.log(yearMoth);


console.log(dayjs().set('year', currentYear).set('month', 1).format('YYYYMM'));

console.log(dayjs('202301', 'YYYYMM')); 