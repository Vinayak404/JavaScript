/********************************************************************************************************************
* @Execution : default node : cmd> arrayCal.js
* @Purpose : to study the functionals working.
* @description :To print the calender of a month of a year using a 2D array.
* @overview : Flip coin 'toss' no of times.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 17-October-2019
*******************************************************************************************************************/
const BalPar = require('./balParenthesesBL')
let input = require('readline-sync');
let exp = input.question("Enter the expression: ")
BalPar.BalParentheses(exp)