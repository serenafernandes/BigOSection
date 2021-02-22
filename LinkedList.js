// let myLinkedList = {
//   head: {
//     value:10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }
class Node {
  constructor(value){
    this.value = value;
    this.next - null;
  }
}

class LinkeList {
  constructor(value){
    this.head = {
      value: value,
      next: null  
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return this;
  }

  prepend(value){
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length ++;
    return this;
  }
// ToDo: this method is not working properly
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkeList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.printList();