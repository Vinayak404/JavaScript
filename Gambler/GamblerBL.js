/**
* @description : Gamble $1 at a time with stake amount(user input) untill the target(user input) is reached or He runs out of cash or max no of gamble reaches.
* @param {stake,goal,Num}, user input
* @return {wins,win_percentage,loss_percentage}, returns the total no of times won,wins and loss percentage.
*/
Gamble = (stake, goal, Num) => {
    try {
        var game = Math.random;
        var i = 0;
        var wins = 0;
        var losses = 0;
        for (i = 0; i < Num; i++) {
            if (game() > 0.5) {
                wins += 1
                stake += 1
            } else {
                losses += 1
                stake -= 1
            }
            if (stake == 0 || stake == goal) {
                break
            }
        }
        var win_percentage = wins * 100 / (wins + losses)
        var loss_percentage = losses * 100 / (wins + losses)
        console.log('Wins=', wins)
        console.log("Win percentage=", win_percentage)
        console.log("Loss percentage=", loss_percentage)
        if (stake == 0) {
            console.log('Bankurpt')
        } else if (stake == goal) {
            console.log('Goal reached')
        } else if (i = Num) {
            console.log('max attempts reached')
        }
    } catch (e) {
        console.log(e.name)
        console.log(e.error)
    }


}
module.exports = { Gamble }