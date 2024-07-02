// deque and enque
class Queue{
    constructor() {
        this.queue=[];
    }

    enque(data){
        this.queue.push(data);
    }
    deque(data) {
        if(this.isEmpty()){
            return "queue is empty";
        } 
        return this.queue.shift();
    }
    isEmpty() {
       return this.queue.length === 0
    }
    peek(){
        if(this.isEmpty()){
            return "queue is empty";
        } 
        return this.queue[0]
    }
    size() {
        return this.queue.length
    }
    clear() {
        this.queue = [];
    }

    printQueue() {
        let str="";
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + "\n";
            
        }
        return str;
    }
}

// usage example
let myQueue = new Queue();
myQueue.enque(10)
myQueue.enque(20)
myQueue.enque(30)
myQueue.enque(40)
myQueue.deque(10)
console.log('1111',myQueue.peek());
console.log(myQueue.printQueue());