class Stack {
  constructor(){
    this.array = [];
  }

  peek() {
    // see top node
    return this.array[this.array.length-1];
  }
  push(value) {
    // push add node to the top
    this.array.push(value);
    return this;
  }

  pop() {
    // remove from the top 
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.peek();
myStack.pop();