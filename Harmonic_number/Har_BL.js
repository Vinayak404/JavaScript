/**
* @description : Find the Harmonic value of the given number 'Num'.
* @param {Num}, user input
* @return {Har(Num)= (1/1)+(1/2)+(1/3)......+(1/Num)}, returns the Harmonic of the number.
*/
Har = (Num) => {
    try {
        if (Num < 0) {
            console.log('Enter positive number')
        } else if (Num == 0) {
            return 0
        } else if (Num == 1) {
            return 1
        } else {
            return (1 / Num) + Har(Num - 1)   //Harmonic using recurrsion
        }
    } catch (e) {
        console.log(e.name)
        console.log(e.error)
    }
}
module.exports = { Har }