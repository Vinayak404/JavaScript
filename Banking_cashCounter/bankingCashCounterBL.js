BCashCounter = (Q, S) => {
    var Bal = 0;
    for (let i = 0; i < S; i++) {
        let out = Q.dequeue()
        console.log(out.data[1])
        if (out.data[0] == 'D') {
            Bal = Bal + out.data[1];
        } else if (out.data[0] == 'W' && Bal - out.data[1] < 0) {
            console.log('Low balance!')
        } else if (out.data[0] == 'W' && Bal - out.data[1] >= 0) {
            Bal = Bal - out.data[1];
        }
    }
    console.log("Balance=", Bal)
}
module.exports = { BCashCounter }