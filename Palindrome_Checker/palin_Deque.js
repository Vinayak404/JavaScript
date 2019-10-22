let input = require('readline-sync')
let Str = input.question('Enter the string:')
let PD = require('../Palindrome_Checker/palin_DequeBL')
console.log(PD.PalinDeque(Str));