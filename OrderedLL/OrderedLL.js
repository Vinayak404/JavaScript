/********************************************************************************************************************
 * @Execution : default node : cmd>OrderedLL.js
 * @Purpose : to study the functionals of OrderedLL are working.
 * @description :To read the file for numbers and add them to ordered linked list and search for the given number.
 * @overview : returning the position of number if found, else update the number into the list.
 * @author : Vinayaka S V <vinayakavastrad@gmail.com>
 * @version : 1.0
 * @since : 19-October-2019
 *******************************************************************************************************************/
let Fnum = require('../OrderedLL/OrderedLLBL')
let input = require('readline-sync')
let num = input.questionInt("Enter the num to be found: ")
Fnum.ifFoundAddElseDel(num)