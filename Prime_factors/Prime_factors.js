/********************************************************************************************************************
* @Execution : default node : cmd> Prime_factors.js
* @Purpose : to study the functionals working.
* @description :to find all the prime factors of Num..
* @overview : checks division condition and returns i if condn satisfies
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 10-October-2019
*******************************************************************************************************************/
const PFac = require('../Prime_factors/Prime_factorsBL')
let input = require('readline-sync')
let Num = input.questionInt('Please Enter a number to find its Prime Factors:')
console.log(PFac.PrFac(Num))