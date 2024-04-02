class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
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
    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value}  `
                curr = curr.next
            }
            console.log('listValues:', listValues);
        }
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.getSize()) {
            return null
        }
        else if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        
        }
    }
    removeFrom(index){
        if(index<0 || index>this.getSize()){
            return null
        }
        let removedNode
        if(index==0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }   
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
            return null
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
              return i
            }
            curr=curr.next
            i++
        }
        return -1
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}

let list = new linkedList()
console.log(list.getSize());
list.prepend(10)
list.prepend(29)
list.prepend(43)
list.print()
console.log(list.getSize());
list.append(19)
list.print()
console.log(list.getSize());
list.insert(56,4)
list.print()
list.removeFrom(3)
list.print()    
list.removeValue(43)
list.print()    
console.log(list.search(56));
list.reverse()
list.print()