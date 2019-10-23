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
