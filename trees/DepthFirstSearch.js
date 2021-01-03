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

  //Depth First Search pre order
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current)
    console.log(data)
    return data;
  }

  //Depth First Search post order
  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(current);
    console.log(data);
    return data;
  }

  //Depth First Search In order
  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    console.log(data)
    return data;
  }

}


const tree = new BinarySearchTree();
tree.insert(5)
tree.insert(8)
tree.insert(7)
tree.insert(9)
tree.insert(3)
tree.insert(4)
tree.insert(2)

tree.DFSPreOrder();
tree.DFSPostOrder();
console.log(tree)

/*
      5
  3       8
2   4   7   9
*/