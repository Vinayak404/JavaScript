/********************************************************************************************************************
* @Execution : default node : cmd> Replace_String.js
* @Purpose : to study the functionals working.
* @description :to replace a part of a string by another string.
* @overview : replace string
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 10-October-2019
*******************************************************************************************************************/
let read = require('readline-sync');
const replac = require('../Replace String/ReplaceBL')
let str1 = read.question('Please enter your name :');
console.log(replac.replace_str(str1));