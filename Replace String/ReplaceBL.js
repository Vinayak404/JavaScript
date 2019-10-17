/**
* @description : to replace a part of a string by another string.
* @param {str1}, user input
* @return {str2}= returns str2 after relacing the name
**/
module.exports.replace_str = (str1) => {
    try {
        let str2 = "Hello name, How are you?";
        if (str1.length >= 3) {
            return (str2.replace('name', str1))
        } else {
            console.log('Please enter min 3 char ')
        }
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}