PalinDeque = (Str) => {
    const dq = require('../Utilities/deque')
    console.log(Str)
    let Deq1 = new dq.Deque;
    for (let i in Str) {
        Deq1.insert(Str[i]);
    }
    console.log(Deq1.IsPalin())
}
module.exports = { PalinDeque }