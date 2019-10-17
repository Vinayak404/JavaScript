//Binary Search Number
/**
* @description : to perform Binary search operation to find the element in the list.
* @param {list1,x}, user input
* @return {mid}, Returning the position of the element in the sorted list.
**/
binSearch = (list1, x) => {
    try {
        let left = 0;
        let right = list1.length;
        while (right >= left) {
            let mid = parseInt((left + right) / 2);
            if (list1[mid] == x) {
                console.log(x, "found at", mid)
                break;
            } else if (list1[mid] < x) {
                left = mid + 1
            } else if (list1[mid] > x) {
                right = mid - 1
            }
        } if (right < left) {
            console.log('Value not found')
        }
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}


//Binary search String
/**
* @description : to perform Binary search operation to find the string element in the list.
* @param {list1,x}, user input
* @return {mid}, Returning the position of the element in the sorted list.
**/
binSearchString = (lis, Str) => {
    try {
        SortedL = lis.sort()
        console.log(SortedL)
        binSearch(SortedL, Str)
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }

}
//Insertion sort
/**
* @description : to perform Insertion sort operation to sort the number list.
* @param {lis}, user input
* @return {lis}, Returning the sorted list
*/
insertSort = (lis) => {
    try {
        for (var i = 1; i < lis.length; i++) {
            let temp = lis[i]
            let j = i - 1
            while (j >= 0 && temp < lis[j]) {
                lis[j + 1] = lis[j]
                j -= 1
            } lis[j + 1] = temp
        } return lis
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
//bubble sort
/**
* @description : to perform Bubble sort operation to sort the number list.
* @param {lis}, user input
* @return {lis}, Returning the sorted list
**/
bubbleSort = (lis) => {
    try {
        for (i = 0; i < lis.length; i++) {
            for (j = 0; j < lis.length - i - 1; j++) {
                if (lis[j] > lis[j + 1]) {
                    temp = lis[j];
                    lis[j] = lis[j + 1];
                    lis[j + 1] = temp
                }
            }
        } return lis
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
module.exports = { binSearch, binSearchString, insertSort, bubbleSort }