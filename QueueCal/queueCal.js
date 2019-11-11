/********************************************************************************************************************
 * @Execution : default node : cmd>queueCal.js
 * @Purpose : to study the functionals of queueCAl are working.
 * @description :To print the calender of a month of a year using queue operations.
 * @overview : returning the calender .
 * @author : Vinayaka S V <vinayakavastrad@gmail.com>
 * @version : 1.0
 * @since : 19-October-2019
 *******************************************************************************************************************/
let month = parseInt(process.argv[2])
let year = parseInt(process.argv[3])
const printCal = require('../QueueCal/queueCalBL')
calen = printCal.qCalen(month, year)
calen.forEach(ele => {
    str = '';
    let z = 7;
    while (z--) {
        str = str + ' ' + ele.deQ().data;
    }
    console.log(str, '\n');
})