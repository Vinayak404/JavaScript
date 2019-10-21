BalParentheses = (exp) => {
    const Stk = require('../Utilities/stack');
    arr = exp.toString().split('');
    let Stack1 = new Stk.Stack;
    arr.forEach(element => {
        if (element == '(' || element == '[' || element == '{') {
            Stack1.push(element)
        }
        else if (element == ')' && Stack1.top.data == '(') {
            Stack1.pop();
        }
        else if (element == ']' && Stack1.top.data == '[') {
            Stack1.pop();
        } else if (element == '}' && Stack1.top.data == '{') {
            Stack1.pop();
        }
    });
    Stack1.isEmpty()
    if (Stack1.size === 0) {
        console.log("The Parentheses are Perfectly Balanced!");
    } else {
        console.log("The parentheses are Not Balanced")
    }
}
module.exports = { BalParentheses }