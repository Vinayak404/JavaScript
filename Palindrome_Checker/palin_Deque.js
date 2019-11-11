/********************************************************************************************************************
 * @Execution : default node : cmd>palin_Deque.js
 * @Purpose : to study the functionals of palinDeque are working.
 * @description :To read the string and add them to Deque, and check if they are palindrome.
 * @overview : returning whether the string is palindrome .
 * @author : Vinayaka S V <vinayakavastrad@gmail.com>
 * @version : 1.0
 * @since : 19-October-2019
 *******************************************************************************************************************/
let input = require('readline-sync')
let Str = input.question('Enter the string:')
let PD = require('../Palindrome_Checker/palin_DequeBL')
console.log(PD.PalinDeque(Str));