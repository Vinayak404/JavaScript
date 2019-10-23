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
    deQ() {
        if (this.first) {
            let temp = this.first;
            this.first = this.first.next;
            this.size--
            return temp
        } else {
            return false
        }
    }
    dequeue() {
        if (!this.first) return false
        else if (!this.next) {
            let temp = this.first;
            this.first = null;
            this.size -= 1;
            return temp;
        } else if (this.next) {
            let temp = this.first;
            this.first = this.first.next;
            this.size -= 1;
            return temp;
        }
    }
    PrintQ() {
        let current = this.first;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    isEmpty() {
        return this.size == 0
    }
    deleteLast() {
        if (this.head) {
            let current = this.head;
            if (current.next == null) {
                let temp = current;
                this.head = null
                this.size--
                return temp
            } else {
                while (current.next.next) {
                    current = current.next
                } let temp = current.next
                current.next = null
                this.size--
                return temp;
            }
        } else {
            console.log('Nothing to delete')
        }
    }
}
module.exports = { Queue, Node }