const pNum = require('./Utility_PrimeAnagramPalindrome')
let input = require('readline-sync')
let Num = input.questionInt('Please Enter the Number to find prime numbers that are lesser:')


let plist = [];
for (let i = 0; i < Num; i++) {
    if (pNum.Prime(i)) {
        plist.push(i)
    }
}

console.log("Primes are", plist)
//Anagram

anagNums = (list1) => {
    var anList = []
    for (let i = 0; i < list1.length; i++) {
        for (let j = i + 1; j < list1.length; j++) {
            let Str1 = String(list1[i]);
            let Str2 = String(list1[j]);
            if (pNum.Anagram(Str1, Str2)) {
                anList.push(list1[i], list1[j])

            } else continue
        }
    } return anList
}

console.log("Prime anagrams are", anagNums(plist))

//Palindrome
pplist = []
plist.forEach(element => {
    if (pNum.Palindrome(element)) {
        pplist.push(element)
    }
});
console.log("Prime ,Anagram and  Palindrome are", pplist)