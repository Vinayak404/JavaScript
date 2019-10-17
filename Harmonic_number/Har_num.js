/********************************************************************************************************************
* @Execution : default node : cmd> Har_num.js
* @Purpose : to study the functionals working.
* @description :Find the Harmonic value of the given number 'Num'.
* @overview : compute (1/1)+(1/2)+(1/3)......+(1/Num).
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 11-October-2019
*******************************************************************************************************************/
const Harm = require('../Harmonic_number/Har_BL')
let input = require('readline-sync')
let Num = input.questionInt('Please enter a number to find its Harmonic Number:')
console.log(Harm.Har(Num))