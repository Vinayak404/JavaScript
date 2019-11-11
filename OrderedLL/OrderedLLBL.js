/**
 * @description : To read the file for numbers and add them to ordered linked list and search for the given number.
 * @param {num}, user input
 * @return {lList}, returning the position of number if found, else update the number into the list.
 */
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

ifFoundAddElseDel = (num) => {
    if (lLIst.findElement(num)) {
        lLIst.deleteElement(num)
    } else {
        console.log("Number not found!")
        lLIst.sortedInsert(num)
    }
    arr = lLIst.getArr()
    fs.writeFileSync("../OrderedLL/fileDS2.txt", arr.join(' '))
    lLIst.printList()
}
module.exports = {
    ifFoundAddElseDel
}