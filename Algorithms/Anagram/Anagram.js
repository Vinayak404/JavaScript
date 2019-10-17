/********************************************************************************************************************
* @Execution : default node : cmd> Anagram.js
* @Purpose : To study the functionals working.
* @description :To check if 2 strings are Anagram
* @overview : Returns True if Strings are anagram of each other
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 14-October-2019
*******************************************************************************************************************/
const Anag = require('../Prime_Anagram_palindrome/Utility_PrimeAnagramPalindrome');
let input = require('readline-sync');
let str1 = input.question('Please Enter the first string:')
let str2 = input.question('Please Enter the second string:')
console.log(Anag.Anagram(str1, str2))