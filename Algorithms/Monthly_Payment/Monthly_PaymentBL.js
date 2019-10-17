//Monthly payment
/**
* @description : To Return the emi for given Principle, Compound Interest rate and time period Values.
* @param {P,Y,R}, user input
* @return {payment},Returns the emi.
*/
emi = (P, Y, R) => {
    try {
        let n = 12 * Y;
        let r = R / (12 * 100)
        let payment = P * r / (1 - ((1 + r) ** (-n)))
        return payment
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
module.exports = { emi }