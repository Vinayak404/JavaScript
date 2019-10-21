let Fnum = require('../OrderedLL/OrderedLLBL')
let input = require('readline-sync')
let num = input.questionInt("Enter the num to be found: ")
Fnum.ifFoundAddElseDel(num)