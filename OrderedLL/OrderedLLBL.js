const LLD = require('../Utilities/Linked_list_Utility');
let fs = require('fs')
file = fs.readFileSync("../OrderedLL/fileDS2.txt")
let lLIst = new LLD.LinkedList
fileArr = file.toString().split(' ')
console.log(fileArr)
fileArr.forEach(element => {
    lLIst.sortedInsert(parseInt(element))
});
lLIst.printList()
let input = require('readline-sync')
let num = input.questionInt("Enter the num to be found: ")
if (lLIst.findElement(num)) {
    lLIst.deleteElement(num)
} else {
    lLIst.sortedInsert(num)
}
arr = lLIst.getArr()
fs.writeFileSync("../OrderedLL/fileDS2.txt", arr.join(' '))
lLIst.printList()