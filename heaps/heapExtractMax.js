class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }


  mauiInsert(val) {
    this.values.push(val)
    let idx = this.values.length - 1
    this.mauiBubbleUp(idx)
  }

  mauiBubbleUp(idx) {
    let parent = Math.floor((idx - 1) / 2)
    if (this.values[idx] > this.values[parent]) {
      let temp = this.values[idx]
      this.values[idx] = this.values[parent]
      this.values[parent] = temp

      this.mauiBubbleUp(parent)
    }
  }

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0]

    while (true) {
      let leftIdx = (2 * idx) + 1;
      let rightIdx = (2 * idx) + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  mauiExtractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.mauiSinkDown(0)
    }
    return max
  }


  mauiSinkDown(idx) {
    const length = this.values.length;
    const element = this.values[idx]
    let leftIdx = (2 * idx) + 1;
    let rightIdx = (2 * idx) + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftIdx < length) {
      leftChild = this.values[leftIdx];
      if (leftChild > element) {
        swap = leftIdx;
      }
    }

    if (rightIdx < length) {
      rightChild = this.values[rightIdx]
      if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
        swap = rightIdx;
      }
    }

    if (swap === null) return;
    this.values[idx] = this.values[swap];
    this.values[swap] = element;
    idx = swap;
    this.mauiSinkDown(idx)

  }

  swap(list, first, second) {
    let temp = list[first]
    list[first] = list[second]
    list[second] = temp

    return list
  }

}

const heap = new MaxBinaryHeap()
heap.mauiInsert(55)
heap.mauiInsert(1)
heap.mauiInsert(0)
heap.mauiInsert(-1)
heap.mauiExtractMax()




console.log(heap)