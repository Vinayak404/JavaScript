/********************************************************************************************************************
* @Execution : default node : cmd> BubbleSortNum.js
* @Purpose : to study the functionals working.
* @description :to perform Bubble sort operation to sort the number list.
* @overview : Returns the sorted list
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 14-October-2019
*******************************************************************************************************************/
var day = new Date();
const SortN = require('../../Utility/UtilitySearchSort')
let input = require('readline-sync')
let x = input.questionInt('Enter the size of array:')
let lis = []
for (i = 0; i < x; i++) {
    let a = parseInt(input.questionInt("enter the List elements:"))
    lis.push(a)
} console.log(lis)
Starttime = day.getUTCMilliseconds()
console.log(SortN.bubbleSort(lis))
Stoptime = day.getUTCMilliseconds()
console.log(Stoptime - Starttime)