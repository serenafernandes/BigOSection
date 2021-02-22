class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // see top node
    return this.top;
  }
  push(value) {
    // push add node to the top
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    // remove from the top 
    if(!this.top) {
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    // if we want to keep record of what was removed:
    // return holdingPointer;
    // to just delete it:
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.pop();