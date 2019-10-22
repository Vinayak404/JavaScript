const BCC = require('../Banking_cashCounter/bankingCashCounterBL')
let input = require('readline-sync');
let Num = input.questionInt("Enter the size of queue:");
const QUtil = require('../Utilities/queue');
let Q = new QUtil.Queue;
while (Num--) {
    let act;
    do act = input.question("press W for withdraw or D for deposit:");
    while (!'DW'.includes(act));
    let amt = input.questionInt("Enter the amount:")
    Q.enqueue([act, amt]);
    S = (Q.size)
}
BCC.BCashCounter(Q, S)
