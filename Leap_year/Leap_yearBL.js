/**
* @description : Check whether Num is a leap year or not.
* @param {Num}, user input
* @return {Whether leap year or not}=returns whether Num is a leap year or not
*/
module.exports.Leap_yr = (year) => {
    try {
        if (year < 999 || year > 10000) {
            console.log("please enter 4 digit year")
        } else {

            if (year % 400 == 0) {
                console.log(year, ' is a leap year')
            }

            else if (year % 4 == 0 && year % 100 != 0) {
                console.log(year, ' is a leap year')
            }
            else {
                console.log(year, " is not a leap year")
            }
        }
    } catch (e) {
        console.log(e.name)
        console.log(e.message)
    }
}





