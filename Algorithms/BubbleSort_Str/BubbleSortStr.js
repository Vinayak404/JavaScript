/********************************************************************************************************************
* @Execution : default node : cmd> BubbleSortStr.js
* @Purpose : to study the functionals working.
* @description :to perform Bubble sort operation to sort the String list.
* @overview : Returns the sorted list
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 15-October-2019
*******************************************************************************************************************/
const SortN = require('../../Utility/UtilitySearchSort')
let input = require('readline-sync')
let x = input.questionInt('Enter the size of array:')
let lis = []
for (i = 0; i < x - 1; i++) {
    let a = input.question("enter the String List elements:")
    lis.push(a)
}
console.log(SortN.bubbleSort(lis))
