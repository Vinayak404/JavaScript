/********************************************************************************************************************
* @Execution : default node : cmd>TempConversion.js
* @Purpose : to study the functionals working.
* @description :To Return the Temperature values of Fahrenhiet and Celcius for the given Celcius and Fahrenheit Values.
* @overview : Returns the temperatue value of Fahrenheit and Celcius standards.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 16-October-2019
*******************************************************************************************************************/
const TConv = require('../Temperature_Conversion/Temperature_ConversionBL')
let input = require('readline-sync')
let p = input.questionInt('Enter 1 for Celcius to Fahrenheit and 2 for Fahrenheit to Celcius:')
let temp = input.questionFloat('Enter the value of Temperature:')
TConv.TempConvert(p, temp)