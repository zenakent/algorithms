class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  coltInsert(elem) {
    this.values.push(elem)
    this.coltBubbleUp()
  }

  coltBubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent
      idx = parentIdx
    }
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

}

const heap = new MaxBinaryHeap()
// heap.coltInsert(55)
// heap.insert(1)
// heap.insert(45)
heap.mauiInsert(55)
heap.mauiInsert(1)
heap.mauiInsert(45)
heap.mauiInsert(155)
console.log(heap)
