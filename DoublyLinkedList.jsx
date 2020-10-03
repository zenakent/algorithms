class Node {
  constructor(val) {
    this.val = val
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current)
      current = current.next;
    }
    return this
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined;
    let tempTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = tempTail.prev
    this.tail.next = null
    tempTail.prev = null;

    this.length--
    return tempTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.prev = null;
    }
    this.length--
    return oldHead
  }

  unshift(val) {
    let newNode = new Node(val)
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let halfLength = Math.floor(this.length / 2)
    let current;
    if (index <= halfLength) {
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev
      }
    }
    return current
  }

  set(val, index) {
    let get = this.get(index);
    if (get) {
      get.val = val
      return true
    }

    return false
  }

  insert(val, index) {
    let newNode = new Node(val)
    if (!this.head) return null;
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.unshift(newNode)
    if (index === this.length) this.push(newNode)

    let get = this.get(index)

    newNode.next = get;
    newNode.prev = get.prev
    get.prev.next = newNode

    this.length++
    return this
  }

  remove(index) {
    if (!this.head) return null;
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.shift(newNode)
    if (index === this.length) this.pop(newNode)

    let get = this.get(index - 1)
    let temp = get.next.next;
    get.next = temp
    get.next.prev = get
    this.length--
    return true;
  }

}

let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.shift()
// list.insert("Maui", 2)
// list.remove(3)
// list.get(0)
// list.set('Maui', 2)
list.traverse()
// console.log(list)