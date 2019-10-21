const QUtil = require('../Utilities/queue');
let input = require('readline-sync');
let Num = input.questionInt("Enter the size of queue:");
let Q = new QUtil.Queue;
while (Num--) {
    let act;
    do act = input.question("press W for withdraw or D for deposit:");
    while (!'DW'.includes(act));
    let amt = input.questionInt("Enter the amount:")
    Q.enqueue([act, amt]);
}
var Bal = 0;
for (let i = 0; i < this.size; i++) {
    let out = Q.dequeue()
    if (out.data[0] == 'D') {
        Bal = Bal + out.data[1];
    } else if (out.data[0] == 'W' && Bal - out.data[1] < 0) {
        console.log('Low balance!')
    } else if (out.data[0] == 'W' && Bal - out.data[1] >= 0) {
        Bal = Bal - out.data[1];
    }
}
console.log("Balance=", Bal)

