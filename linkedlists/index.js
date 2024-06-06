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

