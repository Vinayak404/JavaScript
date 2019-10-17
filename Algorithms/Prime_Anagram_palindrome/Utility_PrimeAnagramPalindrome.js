//Anagram Detector
/**
* @description : To check if 2 strings are Anagram
* @param {str1, str2}, user input
* @return {true ,false}, Returning true if str 1 and str2 are anagram of each other
*/
Anagram = (str1, str2) => {
    try {
        let sort1 = str1.toLocaleLowerCase().split('').sort();
        let sort2 = str2.toLocaleLowerCase().split('').sort();
        return String(sort1) === String(sort2);
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}

//Prime Numbers
/**
* @description : To check if 2 strings are Anagram
* @param {Num}, user input
* @return {true ,false}, Returning true if Num is prime.
*/
Prime = (Num) => {
    try {
        if (Num == 0 || Num == 1) {
            return false;
        }
        for (let i = 2; i < Num; i++) {
            if (Num % i == 0) {
                return false;
            }
        }
        return true;
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
//Palindrome
/**
* @description : To check if 2 Numbers are Palindrome
* @param {Num}, user input
* @return {true ,false}, Returning true if Num is palindrome.
*/
Palindrome = (Num) => {
    try {
        let Str3 = String(Num);
        let revStr = ''
        let Slist = Str3.split('')
        let len = Slist.length;
        for (let i = 0; i < len; i++) {
            p = Slist.pop()
            revStr += p


        }
        return (Str3 === revStr)
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
module.exports = { Prime, Anagram, Palindrome }