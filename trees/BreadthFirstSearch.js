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

  //visit every single node
  breadthFirstSearch() {
    let data = [], queue = [], node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      console.log('node', node.value)

      data.push(node.value);
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      console.log('queue', queue)
    }
    return data
  }

  //BFS with actual searching
  breadthFirstSearchSearch(val) {
    let data = [], queue = [], node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.value === val) {
        console.log(`Found ${val}!`)
        return node.value
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    console.log(`${val} doesn't exist in this tree`)
    return -1
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


// tree.breadthFirstSearchSearch(2)
tree.breadthFirstSearch()

/*
      5
  3       8
2   4   7   9
*/

function nextId(ids) {
  //this will be awesome!
  console.log(search(ids, ids.length))
}

function search(array, size) {
  let a = 0;
  let b = size - 1;
  let mid = 0;

  while (b > a + 1) {
    mid = (a + b) / 2
    if (array[a] - a !== array[mid] - mid) {
      b = mid
    } else if (array[b] - b !== array[mid] - mid) {
      a = mid
    }
    return array[mid] + 1
  }
}


// nextId([0, 1, 2, 3, 5])