hashFunc = (N, Num) => {
    const fs = require('fs')
    const LL = require('../Utilities/Linked_list_Utility')
    nums = N.toString().split(' ')
    let arr = [];
    for (let i = 0; i < 11; i++) {
        arr[i] = new LL.LinkedList;
    }
    for (let i in nums) {
        let j = parseInt(nums[i]) % 11;
        arr[j].sortedInsertwodupli(parseInt(nums[i]));
    }
    for (i in arr) {
        console.log(i)
        arr[i].printList()
    }
    let j = Num % 11;
    if (!arr[j].sortedInstDupFalsOrAdd(Num)) {
        arr[j].deleteElement(Num)
    }
    var finalArr = []
    for (let i in arr) {
        let ar2 = arr[i].getArr()
        for (let j in ar2) {
            finalArr.push(ar2[j])
        }
    } console.log('FA', finalArr)
    fs.writeFileSync('../Hashing_function/fileDS3.txt', finalArr.join(' '))

    for (i in arr) {
        console.log(i)
        arr[i].printList()
    }
}
module.exports = { hashFunc }