/**
* @description : print table of powers of 2 upto Num.
* @param {Num}, user input
* @return {2**i}=returns 2 to the power of i from(0 to Num)
*/
module.exports.Pow_of_2 = (Num) => {
    try {
        if (Num < 0 || Num % 1 > 0) {
            console.log('Please Enter a positive integer')
        } else {
            for (i = 0; i <= Num; i++) {
                console.log(2 ** i)
            }
        }
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}