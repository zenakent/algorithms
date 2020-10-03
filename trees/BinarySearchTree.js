class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  debug() {
    return this;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this
        }
        current = current.left
      }
    }
  }

  search(value) {
    if (!this.root) return undefined;
    if (this.root === value) return this.root;
    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (current.right !== null) {
          current = current.right
          if (value === current.value) {
            console.log(`found it. ${current.value}`)
            return `found it. ${current}`
          }
        } else {
          console.log(`it does not exist in this tree`)
          return `it does not exist in this tree`
        }
      }
      if (value < current.value) {
        if (current.left !== null) {
          current = current.left
          if (value === current.value) {
            console.log(`found it. ${current.value}`)
            return `found it. ${current}`
          }
        } else {
          console.log(`it does not exist in this tree`)
          return `it does not exist in this tree`
        }
      }
    }
  }

}

let tree = new BinarySearchTree();
tree.insert(50)
tree.insert(25)
tree.insert(30)
tree.insert(20)
tree.insert(75)
tree.insert(60)
tree.insert(80)

tree.search(25)


// tree.debug()
// console.log(tree)