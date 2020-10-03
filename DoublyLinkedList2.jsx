class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//push, pop, unshift, shift, set, get, remove, insert
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


}


let list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.pop()

console.log(list)