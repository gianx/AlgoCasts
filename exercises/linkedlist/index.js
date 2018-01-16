// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    construct() {
        this.head = null;
    }

    insertFirst(data) {
        return this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let c = 0;
        while (node) {
            c ++
            node = node.next;
        }
        return c;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return 
        }
        this.head = this.getFirst().next;
    }

    removeLast() {
        if ((!this.head) || (!this.head.next)){
            this.head = null;
            return
        }
        let node = this.head;
        while (node) {
            if (!node.next.next) {
                node.next = null
                return
            }
            node = node.next;
        }
    }

    insertLast(data) {
        if (this.getLast()) {
            this.getLast().next = new Node(data); 
        } else {
            this.head = new Node(data)
        }
    }

    getAt(pos){
        if (!this.head){
            return null;
        }
        let node = this.head;
        for (let x = 0; x<pos; x++) {
            if (!node.next) {
                return null;
            } else {
                node = node.next;
            }
        }
        return node;
    }

    removeAt(pos) {

        if ( (!this.getAt(pos))) {
            return 
        } 
        if (pos==0) {
            this.head = this.getAt(1);
            return
        }
       this.getAt(pos-1).next = this.getAt(pos+1);
        

    }

    insertAt(data,pos) {
        if ((!this.head) || (pos==0)){
            this.head = new Node(data, this.getAt(0));
            return
        } else if (pos <= this.size()) {
            this.getAt(pos-1).next = new Node(data, this.getAt(pos));
            return
        } else {
            this.getLast().next = new Node(data);
        }
        
    }

}

const list = new LinkedList();
list.head = new Node(10);

module.exports = { Node, LinkedList };
