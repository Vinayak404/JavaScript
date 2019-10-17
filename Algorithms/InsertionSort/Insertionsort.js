/********************************************************************************************************************
* @Execution : default node : cmd> Insertionsort.js
* @Purpose : to study the functionals working.
* @description :To perform Insertion sort operation to sort the number list.
* @overview : Returns the sorted list
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 15-October-2019
*******************************************************************************************************************/
var day = new Date();
const SortN = require('../../Utility/UtilitySearchSort')
let input = require('readline-sync')
let x = input.questionInt('Enter the size of array:')
let lis = []
for (i = 0; i < x; i++) {
    let a = input.questionInt("enter the List elements:")
    lis.push(a)
} Starttime = day.getUTCMilliseconds()
console.log(SortN.insertSort(lis))
Stoptime = day.getUTCMilliseconds()
console.log(Stoptime - Starttime)