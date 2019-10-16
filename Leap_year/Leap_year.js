/********************************************************************************************************************
* @Execution : default node : cmd> Leap_year.js
* @Purpose : to study the functionals working.
* @description :Check whether Num is a leap year or not.
* @overview : to find whether Num is a leap year or not.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 11-October-2019
*******************************************************************************************************************/
const L_year = require('../Leap_year/Leap_yearBL')
let input = require('readline-sync')
let year = input.question('Enter the year:')
L_year.Leap_yr(year);
