/********************************************************************************************************************
* @Execution : default node : cmd> Gambler.js
* @Purpose : to study the functionals working.
* @description :Gamble $1 at a time with stake amount(user input) untill the target(user input) is reached or He runs out of cash.
* @overview : Gamble with the available cash.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 12-October-2019
*******************************************************************************************************************/
const Gamb = require('../Gambler/GamblerBL')
let input = require('readline-sync')
let stake = input.questionInt('Enter the stake amount:')
let goal = input.questionInt('Enter the goal:')
let Num = input.questionInt('Enter the max no of trials:')
Gamb.Gamble(stake, goal, Num)