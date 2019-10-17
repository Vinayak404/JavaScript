/**
* @description : to find all the prime factors of Num.
* @param {Num}, user input
* @return {i}=checks division condition and returns i if condn satisfies
*/
PrFac = (Num) => {
    try {
        if (Num <= 0) {
            console.log("Please use positive numbers");
        } else {
            for (var i = 2; i <= Num; i++) {
                while (Num % i == 0) {
                    console.log(i);
                    Num /= i;
                }
            }
        }
    } catch (e) {
        console.log(e.message)
        console.log(e.name)
    }
}
module.exports = { PrFac }