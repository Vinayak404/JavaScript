/********************************************************************************************************************
 * @Execution : default node : cmd> bankingCashCounter.js
 * @Purpose : to study the functionals working of banking counter.
 * @description :To exectute the deposits and withdrawal functions at the counter.
 * @overview : To accept the deposits to the main balance and update it, check the balance for withdrawal and exectute if the balance is sufficent only.
 * @author : Vinayaka S V <vinayakavastrad@gmail.com>
 * @version : 1.0
 * @since : 17-October-2019
 *******************************************************************************************************************/
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