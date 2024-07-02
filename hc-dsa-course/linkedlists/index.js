/*
Linked List
Node, consider, data as node Arrat as linkedlist.

*/

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head=null;

    }
}

// insertion of data in linkedlist at the begining
/* Take data, convert it to node, add this data to the head */

LinkedList.prototype.insertAtBegining = function(data) {
    const newNode = new Node(data);
    this.head = newNode;
}

// Insertion at the end 

LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data);
    if(!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head
    // last.next == null -> true then assign last.next=newNode;
    while(last.next) {
        last = last.next;
    }
    last.next = newNode;
}

// insertion of data at any given node in linkedlist
LinkedList.prototype.insertAfter = function(prevNode, data) {
    if(!prevNode) {
        console.log("The given prev node cannot be null");
        return;
    }

    const newNode = new Node(data, prevNode.next) 
        prevNode.next = newNode;
    

}

// Delete first node operation in linkedlist.

LinkedList.prototype.deleteFirstNode= function() {
    if(!this.head) {
        return 
    }
    this.head = this.head.next;
};

// delete Last Node(Second last node condition)
LinkedList.prototype.deleteLastNode = function() {
    if(!this.head) {
        return // nothing to delete if the list is empty
    }
    if(!this.head.next) {
        this.head=null; // if there is only one node;
        return 
    }

    let secondLast = head;
    while(secondLast.next.next) {
        secondLast = secondLast.next;
    }
    secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function(key) {
    // if the list is empty 
    if(!this.head) {
        console.log("List is empty");
        return;
    }

    //  Data found at the head
    if(this.head.data===key) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while(current.next !== null) {
        current.next.data === key;
        if(current.next.data === key) {
            current.next = current.next.next;
            return;
        }
        current = current.next;

    }
    console.log("No node found with the key :", key);
}

// search operation in linkedlist
LinkedList.prototype.search = function(key) {
    let current = this.head;

    while(current) {
        if(current.data === key) {
            return true;

        }
    }
    return false;
}

// traversal of linkedlist
LinkedList.prototype.traverse = function() {
    let current = this.head;
    let listValues = [];

    while(current) {
        listValues.push(current.data); // push the data to the list
        current = current.next; // move to next node
    }
    console.log(listValues.join(
        " ->"
    ));
}

// reverse the linkedlist
LinkedList.prototype.reverse = function() {
    let current = this.head;
    let prev = null;
    let next = null;

    while(current) {
        console.log(current.data);
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}


// Example usage
const list = new LinkedList();
list.traverse();
list.insertAtBegining(20);
list.traverse(); // Output: 20
list.insertAtEnd(30);
list.traverse(); // Output: 20 -> 30

// Find the node after which you want to insert the new node
let node = list.head.next; // This is the node with data 20
list.insertAfter(node, 35);
list.traverse(); // Output: 20 -> 35 -> 30

// Insert after the node with data 35
node = node.next; // This is the node with data 25
list.insertAfter(node, 27);
list.traverse(); // Output: 20 -> 25 -> 27 -> 30
list.deleteByKey(30);
list.traverse();
list.reverse();
list.traverse();