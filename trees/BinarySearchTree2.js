class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  debug() {
    return this;
  }


  insert(val) {
    const newNode = new Node(val)
    //if there is no root, set the node as the root and return
    if (!this.root) {
      this.root = newNode;
      return this;
    }


    let current = this.root;

    while (true) {
      if (val === current.value) return 1

      if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }

      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }

  }

  search(val) {
    if (!this.root) return undefined;
    if (this.root === val) return this;

    let current = this.root;

    while (true) {
      if (val > current.value) {
        if (!current.right) {
          return -1
        }
        if (current.right.value === val) {
          return current.right
        }

        current = current.right

      }

      if (val < current.value) {
        if (!current.left) {
          return -1
        }
        if (current.left.value === val) {
          return current.left
        }
        current = current.left
      }
    }


  }


}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(8)
tree.insert(7)
tree.insert(9)
tree.insert(3)
tree.insert(4)
tree.insert(2)


tree.search(8)


tree.debug()
console.log(tree)