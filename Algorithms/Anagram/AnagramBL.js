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
module.exports = { Anagram }