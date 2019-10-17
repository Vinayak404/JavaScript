/********************************************************************************************************************
* @Execution : default node : cmd> MonthlyPayment.js
* @Purpose : to study the functionals working.
* @description :To Return the EMI for the given Principle, Compound inerest rate and time period.
* @overview : Returns the Monthly installment for the above data .
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 16-October-2019
*******************************************************************************************************************/
const monthInst = require('../Monthly_Payment/Monthly_PaymentBL')
let input = require('readline-sync')
let P = input.questionInt('Enter the Principle amount:')
let Y = input.questionInt('Enter the payment period in years:')
let R = input.questionInt('Enter the Interest rate:')
console.log(monthInst.emi(P, Y, R))