/********************************************************************************************************************
 * @Execution : default node : cmd>LL_fileSearch.js
 * @Purpose : to study the functionals of file search program are working.
 * @description To read the file and to add them in a node of linked list and find the word in the linked list and update it back to the file
 * @overview : To add the word if not found to the file,or return the location of the word otherwise.
 * @author : Vinayaka S V <vinayakavastrad@gmail.com>
 * @version : 1.0
 * @since : 19-October-2019
 *******************************************************************************************************************/
const FS = require('../LLfileSearch/LL_fileSearchBL')
let input = require('readline-sync')
let fWord = input.question('Enter the word to find:')
FS.FSearch(fWord)