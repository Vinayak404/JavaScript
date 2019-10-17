/********************************************************************************************************************
* @Execution : default node : cmd>VendingMAchine.js
* @Purpose : to study the functionals working.
* @description :To Return the cash for the given amount with least number of bills.
* @overview : Returns the least possible currency bills and thier quantity.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 16-October-2019
*******************************************************************************************************************/
const VM = require('../Vending_Machine/VendingMachineBL')
let input = require('readline-sync')
num = input.questionInt("please enter the amount:")
VM.VendingMachine(num)