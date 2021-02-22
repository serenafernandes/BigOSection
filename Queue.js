class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.fisrt;
  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.fisrt = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    if(!this.fisrt){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.fisrt.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.dequeue();
myQueue.peek();