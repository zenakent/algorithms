class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    let element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length;
    const element = this.values[0]

    while (true) {
      let leftIdx = 2 * idx + 1
      let rightIdx = 2 * idx + 2
      let leftChild, rightChild;
      let swap = null

      if (leftIdx < length) {
        leftChild = this.values[leftIdx]
        if (leftChild.priority < element.priority) {
          swap = leftIdx
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx]
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightIdx
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = element;
      idx = swap;
    }

  }
}

let ER = new PriorityQueue()
ER.enqueue("cold", 5)
ER.enqueue("GSW", 1)
ER.enqueue("Fever", 4)
ER.enqueue("Fall", 4)
ER.dequeue()

console.log(ER)