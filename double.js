class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class doubleLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
            node.prev = curr
        }
    }
    print() {
        if (this.isEmpty()) {
            console.log('is Empty');
        }
        let curr = this.head
        let listedValues = ''
        while (curr) {
            listedValues += `${curr.value}`
            curr = curr.next
        }
        console.log('listedValues:', listedValues);
    }
    reverse(){
        if(this.getSize<1){
            return value
        }
        let current = this.head;
        let temp = null;

        // Swap prev and next pointers for all nodes
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev; // Move to the next node
        }
    }
}

let list = new doubleLinkedList()
list.append('a')
list.append('b')
list.reverse()
list.print()