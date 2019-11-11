/**
 * @description : To exectute the deposits and withdrawal functions at the counter..
 * @param {act,amount}, user input
 * @return {Bal}, returning the balance at the end of all the transactions.
 */
BCashCounter = (Q, S) => {
    var Bal = 0;
    for (let i = 0; i < S; i++) {
        let out = Q.dequeue().data
        console.log(parseInt(out[1]))
        if (out[0] == 'D') {
            Bal = Bal + parseInt(out[1]);
        } else if (out[0] == 'W' && Bal - parseInt(out[1] < 0)) {
            console.log('Low balance!')
        } else if (out[0] == 'W' && Bal - parseInt(out[1] >= 0)) {
            Bal = Bal - parseInt(out[1]);
        }
    }
    console.log("Balance=", Bal)
}
module.exports = {
    BCashCounter
}