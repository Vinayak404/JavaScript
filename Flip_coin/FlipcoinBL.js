/**
* @description : Flip a Coin toss amount of times and return the Heads percentage.
* @param {toss}, user input
* @return {Head_percentage,tail_percentage}, returns the Heads and Tails percentage for the coin flipped 'toss' amount of times.
*/
module.exports.Flip_coin = (toss) => {
    try {
        var Head_count = 0;
        var Tails_count = 0;
        var rand_toss = Math.random;// Generate Random float between 0 and 1
        for (counter = 0; counter < toss; counter++) { // Flip the coins only upto 'toss' amount
            if (rand_toss() > 0.5) {
                Head_count++                         // Heads if Random float is between(0.5-1) ,Tails otherwise
            }
            else {
                Tails_count++
            }
        }
        Head_percentage = Head_count * 100 / toss
        tail_percentage = Tails_count * 100 / toss
        console.log('Head percentage:', Head_percentage)
        console.log('Tail percentage:', tail_percentage)
    } catch (e) {
        console.log(e.name)
        console.log(e.error)
    }
}