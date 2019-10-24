
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //InsertFirst
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
    }
    retList() {
        let current = this.head;
        while (current !== null) {
            let temp = current.data
            current = current.next;
            return temp
        }
    }
    //InsertLast
    insertLast(data) {
        let node = new Node(data);
        let current;
        //if list is empty
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next
            } current.next = node;
        } this.size++
    }
    sortedInsert(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node
            this.size++
        }
        else {
            while (current.next && node.data >= current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }
    findElement(fdata) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (current.data == fdata) {
                console.log(fdata, 'Found at:', count);
                return true
            }
            current = current.next;
            count++
        }
        return false;
    }
    insertAt(data, pos) {
        let node = new Node(data)
        let current = this.head;
        let count = 0;
        if (pos == 0) {
            this.head = node;
            node.next = current;
            this.size++
        } else if (0 < pos && pos <= this.size) {
            while (pos > count + 1) {
                current = current.next;
                count++
            } node.next = current.next;
            current.next = node;
            this.size++
        } else {
            console.log("Position Entered is out of range, please enter number between 0 and", this.size)
        }
    }
    deleteFirst() {
        if (this.head) {
            this.head = this.head.next;
            this.size--
        } else {
            return null
        } this.size--
    }
    deleteLast() {
        if (this.head) {
            let current = this.head;
            if (current.next == null) {
                this.head = null
            } else {
                while (current.next.next) {
                    current = current.next
                } current.next = null
            } this.size--
        } else {
            console.log('Nothing to delete')
        }
    }
    getArr() {
        let arr = []
        let current = this.head;
        while (current !== null) {
            arr.push(current.data)
            current = current.next;
        } return arr
    }
    deleteElement(data) {
        let current = this.head;
        if (!this.head) {
            return false
        } else if (this.head.data == data) {
            this.head = current.next
            this.size--
        } else {
            let prev = null;
            while (current.data != data) {
                prev = current;
                current = current.next;
            } prev.next = current.next
        } this.size--
    }
    sortedInsertwodupli(data) {
        let node = new Node(data);
        let current = this.head;
        if (this.head && node.data == current.data) {
            console.log("already exists")
        }
        else if (!this.head || node.data < current.data) {
            node.next = this.head;
            this.head = node
            this.size++
        } else if (current.next && node.data == current.next.data) {
            console.log("already exists")
        } else {
            while (current.next && node.data > current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }
    sortedInstDupFalsOrAdd(data) {
        let node = new Node(data);
        let current = this.head;
        if (this.head && node.data == current.data) {
            this.deleteElement(data)
        }
        else if (!this.head || node.data < current.data) {
            node.next = this.head;
            this.head = node
            this.size++
        } else if (current.next && node.data == current.next.data) {
            this.deleteElement(data)
        } else {
            while (current.next && node.data > current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }
}

module.exports = {
    LinkedList, Node
}
let d = new LinkedList
d.sortedInstDupFalsOrAdd(3)
d.sortedInstDupFalsOrAdd(3)
d.printList()