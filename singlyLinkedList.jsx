class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val)
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return null;
    let current = this.head
    while (current.next !== null) {
      let previous = current
      current = current.next
      if (current.next === null) {
        previous.next = null;
        this.tail = previous
      }
    }
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return null;

    let current = this.head;
    this.head = current.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }
    return this
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    }
    newNode.next = this.head
    this.head = newNode

    this.length++
    return this
  }

  get(val) {
    if (val < 0 || val >= this.length) return null
    let place = 0
    let current = this.head
    while (place !== val) {
      current = current.next
      place++
    }
    console.log(current)
    return current
  }
}

let list = new SinglyLinkedList
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.get(2)
// console.log(list.traverse())