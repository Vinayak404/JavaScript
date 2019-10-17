/********************************************************************************************************************
* @Execution : default node : cmd> BinarySearchString.js
* @Purpose : to study the functionals working.
* @description :to perform Binary search operation to find thr String in the list.
* @overview : Returns the position of the element in the sorted list
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 14-October-2019
*******************************************************************************************************************/
var day = new Date();
const Search = require('../../Utility/UtilitySearchSort')
let input = require('readline-sync')
let x = input.questionInt('Enter the size of array:')
let lis = []
for (i = 0; i < x; i++) {
    let a = input.question("enter the List elements:")
    lis.push(a)
}
let str1 = input.question('Enter the string to find:')
console.log(lis)
Starttime = day.getUTCMilliseconds()
console.log(Search.binSearchString(lis, str1))
Stoptime = day.getUTCMilliseconds()
console.log(Stoptime - Starttime)