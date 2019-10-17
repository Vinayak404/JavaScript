/********************************************************************************************************************
* @Execution : default node : cmd> BinartSearchNum.js
* @Purpose : to study the functionals working.
* @description :to perform Binary search operation to find thr element in the list.
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
    let a = parseInt(input.questionInt("enter the List elements:"))
    lis.push(a)
}
let key = input.questionInt("Enter the Element to be found:")
let list1 = lis.sort(function (a, b) {
    return a - b
});
console.log(list1);
Starttime = day.getUTCMilliseconds()
console.log(Search.binSearch(lis, key))
Stoptime = day.getUTCMilliseconds()
console.log(Stoptime - Starttime)