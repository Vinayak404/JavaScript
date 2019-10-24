let month = parseInt(process.argv[2])
let year = parseInt(process.argv[3])
const printCal = require('../Stack_calen/stackCalBL')
const Stck = require('../Utilities/stack')
calenQ = printCal.CalenQS(month, year)
let Stck2 = new Stck.Stack;
let y = 7;
while (y--) {
    let P = calenQ.pop().data;
    Stck2.push(P)
    let Q = Stck2.pop().data;
    str = '';
    let z = 7;
    while (z--) {
        var k = Q.deQ().data;
        str = str + ' ' + k;
    };
    let revStr = ''
    let Slist = str.split(' ')
    let len = Slist.length;
    for (let i = 0; i < len; i++) {
        p = Slist.pop()
        revStr += p + ' '
    }
    console.log(revStr, '\n');
}