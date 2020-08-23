/*
push, pop, shift, unshift, insert, remove, get, set, reverse
*/

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

  //insert node at the end
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode
      this.length++
    }
    return this;
  }

  //remove the last node
  pop() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      let previous = current;
      current = current.next;
      if (current.next === null) {
        previous.next = null
        this.tail = previous
      }

    }
    this.length--;
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return this
  }

  //adds node at the beginning
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val)
      current = current.next;
    }
    return this
  }

  //removes the first node
  shift() {
    if (!this.head) return null;
    let temp = this.head.next;
    this.head = temp;

    this.length--
    return this;
  }

  //get the node at the index
  get(index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head;
    for (let i = 0; i !== index; i++) {
      current = current.next
    }
    return current;
  }

  //set the new value at index
  set(val, index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    current.val = val;
    return current
  }


  //insert a new node somewhere
  insert(val, index) {
    if (!this.head) return null;
    if (index < 0 || index >= this.length) return false
    if (index === this.length) !!this.push(val);
    if (index === 0) !!this.unshift(val)
    let newNode = new Node(val)


    let got = this.get(index - 1)
    newNode.next = got.next;
    got.next = newNode


    this.length++
    return true
  }

  //remove a node somewhere
  remove(index) {
    if (!this.head) return null;
    if (index < 0 || index >= this.length) return false
    if (index === this.length) !!this.pop();
    if (index === 0) !!this.shift()

    let got = this.get(index - 1)
    let temp = got.next.next
    got.next = temp

    this.length--
    return true
  }

  //reverse the linked list
  reverse() {
    //swap the head and tails
    let node = this.head;
    this.head = this.tail;
    this.tail = node
    let next, prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

  }
}

let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.set('Maui', 1)
list.insert('Vina', 1)
list.remove(2)
list.reverse()
list.traverse()