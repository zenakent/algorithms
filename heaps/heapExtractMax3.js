class maxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }


  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    //get the index of the last element
    let idx = this.values.length - 1
    //get the last element
    let element = this.values[idx]

    //loop while the idx is > 0
    while (idx > 0) {
      //get the parent index
      let parentIdx = Math.floor((idx - 1) / 2)
      //get the parent element
      let parent = this.values[parentIdx]
      //end the loop when the element is in the right place
      if (element <= parent) break;
      //swap value
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0]
    let end = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    console.log(max)
    return max
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftIdx = (2 * idx) + 1
      let rightIdx = (2 * idx) + 2
      let leftChild, rightChild;
      let swap = null

      if (leftIdx < length) {
        leftChild = this.values[leftIdx]
        if (leftChild > element) {
          swap = leftIdx
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx]
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightIdx
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }

}

const heap = new maxBinaryHeap()
heap.insert(50)
heap.extractMax()

console.log(heap)