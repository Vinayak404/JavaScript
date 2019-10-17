/********************************************************************************************************************
* @Execution : default node : cmd> Flip_coin.js
* @Purpose : to study the functionals working.
* @description :Flip a Coin toss amount of times and return the Heads percentage.
* @overview : Flip coin 'toss' no of times.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 12-October-2019
*******************************************************************************************************************/
const Flip = require('../Flip_coin/FlipcoinBL')
let input = require('readline-sync')
let toss = input.questionInt('Enter the number of Tosses:')
Flip.Flip_coin(toss);