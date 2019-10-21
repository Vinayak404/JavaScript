

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};
class Queue {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);
        let n;
        if (!this.first) {
            this.first = node;
        } else {
            n = this.first;
            while (n.next) {
                n = n.next;
            }
            n.next = node;
        }

        this.size += 1;
        return node;
    }
    dequeue() {
        let temp = this.first;
        this.first = this.first.next;
        this.size -= 1;
        return temp;
    }
    PrintQ() {
        let current = this.first;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    // getArr() {
    //     let arr = []
    //     let current = this.first;
    //     while (current !== null) {
    //         arr.push(current.data)
    //         current = current.next;
    //     } return arr
    // }
    Bank() {
        var Bal = 0;
        for (let i = 0; i < this.size; i++) {
            let out = Queue.dequeue()
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
    // allBal(Bal) {
    //     for (let i = 0; i < Queue.size; i++) {
    //         let curr = this.first
    //         if (curr.data[1] < Bal) {
    //             return false
    //         } else {
    //             curr = curr.next
    //         }
    //     } return true
    // }
    // allW() {
    //     let curr = this.first;
    //     for (let i = 0; i < Queue.size; i++) {
    //         if (curr.data[0] == 'D') {
    //             return false;
    //         } else {
    //             curr = curr.next
    //         }
    //     } return true
    // }

}
module.exports = { Queue, Node }