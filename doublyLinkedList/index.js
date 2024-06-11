class Node {
    constructor(data, next=null, prev=null) {
        this.data = data;
        this.next = next;
        this.prev = prev;

    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null; // Head is the first node
        this.tail = null; // Tail is the last node

    }

}

// Insert at begining
DoublyLinkedList.prototype.insertAtBegining  = function(data) {
    const node = new Node(data, this.head, null)

    if(this.head !== null) {
        this.head.prev = node;
        
    }
    this.head = node;
    if(this.tail === null) {
        this.tail = node;
    }
}
// Insert at the end
DoublyLinkedList.prototype.insertAtEnd = function(data) {
    const node = new Node(data, null, this.tail)

    if(!this.tail !== null) {
        this.tail.next = node;
    }
    this.tail = node;

    if(this.head === null) {
        this.head = node;
    }

    // Insert after given node

    DoublyLinkedList.prototype.insertAfter = function(prevNode, data) {
        if (prevNode) {
            console.log("Invalid prev node");
            return;
            
        };
        const newNode = new Node(data, prevNode.next, prevNode) 
        if(prevNode.next !== null) {
            prevNode.next.prev = newNode;

        } 
        prevNode.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
            
        }
    }

    // Delete by first node
    DoublyLinkedList.prototype.deleteByFirstNode = function() {
        if(!this.head) {
            return; // nothing to delete
        }

        if(this.head === this.tail) {
            this.head =  null;
            this.tail =  null;
        } else {
            this.head  = this.head.next;
            this.head.prev = null;
        }
    }
    // Delete by last node
    DoublyLinkedList.prototype.deleteByLastNode = function() {
        if(!this.tail) {
            console.log("The tail is empty");
            return;
        }
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    // Reverse doubly linkedlist
    DoublyLinkedList.prototype.reverse=function() {
        let current = this.head;
        let temp = null;

        while(current !== null) {
            // swapping
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            //move to next node
            current = current.prev;
        }
        if(temp !== null) {
            this.tail = this.head;
            this.head = temp.prev;
        }
    }


    

    
}

const list = new DoublyLinkedList();
list.insertAtBegining(20);
console.log(list);
list.insertAtEnd(40);

console.log(list);