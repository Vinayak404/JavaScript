/********************************************************************************************************************
* @Execution : default node : cmd> FileSearch.js
* @Purpose : to study the functionals working.
* @description :To scan the file and find the given string in the list of file elements.
* @overview : Returns the location of the element of the text file in the sorted list .
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 16-October-2019
*******************************************************************************************************************/
const file = require('file-system');
const fs = require('fs')
const bSearch = require('../../Utility/UtilitySearchSort')
let input = require('readline-sync')
text = fs.readFileSync('../File_Search/file.txt');
let ip = text.toString().split(' ');
console.log(ip)
let arr = ip.sort();
console.log(arr);
let key = input.question("Enter the string to be searched:")
bSearch.binSearchString(arr, key)