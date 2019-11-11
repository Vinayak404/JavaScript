/********************************************************************************************************************
 * @Execution : default node : cmd>hashing_func.js
 * @Purpose : to study the functionals of hashing program are working.
 * @description :To read the values of numbers in a file and to add them in a node of linked list which represents the number's module of 11.
 * @overview : To add numbers to the nth node of linked list after checking its mod of 11.
 * @author : Vinayaka S V <vinayakavastrad@gmail.com>
 * @version : 1.0
 * @since : 18-October-2019
 *******************************************************************************************************************/
let hashF = require('../Hashing_function/hashing_funcBL')
const input = require('readline-sync')
let Num = input.questionInt("Enter the number to find:")
const fs = require('fs')
N = fs.readFileSync('../Hashing_function/fileDS3.txt')
console.log(N)
hashF.hashFunc(N, Num)