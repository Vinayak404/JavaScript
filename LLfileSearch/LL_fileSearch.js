const FS = require('../LLfileSearch/LL_fileSearchBL')
let input = require('readline-sync')
let fWord = input.question('Enter the word to find:')
FS.FSearch(fWord)