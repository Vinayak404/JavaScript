// Temperature Conversion
/**
* @description : To Return the Temperature values of Fahrenhiet and Celcius for the given Celcius and Fahrenheit Values.
* @param {p,temp}, user input
* @return {temp values},Returns the temperatue value of Fahrenheit and Celcius standards.
*/
TempConvert = (p, temp) => {
    try {
        var i;
        switch (p) {
            case 1:
                console.log("The Fahrenhiet Value of given Temperature is:")
                i = (temp * 9 / 5) + 32
                break;
            case 2:
                console.log("The Celcius Value of given Temperature is:")
                i = (temp - 32) * 5 / 9
                break;
        }console.log(i)
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
module.exports = { TempConvert }