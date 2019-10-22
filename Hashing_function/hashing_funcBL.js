HF = (N) => {
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
}
module.exports = { HF }