//Binary Heap
//child to find parent Math.floor((n-1)/2)
//parent to find child 2n+1 and 2n+2\

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value)
    //a function to swap bigger numbers from the bottom
    this.bubbleUp()
  }

  //a function to swap bigger numbers from the bottom
  bubbleUp() {
    //get index of the last element array
    let idx = this.values.length - 1
    //get the last element of the array
    const element = this.values[idx]

    //loop while idx > 0
    while (idx > 0) {
      //get the index of the parent Element
      let parentIdx = Math.floor((idx - 1) / 2)
      //get the parent element of the inserted value
      let parent = this.values[parentIdx]
      //break when element is in it's right place
      if (element <= parent) break;
      //swap the value of the parentIdx with the element
      this.values[parentIdx] = element
      //swap the value of the idx with the parent
      this.values[idx] = parent
      //swap the value idx with the parentIdx
      idx = parentIdx
    }

  }
}

const heap = new MaxBinaryHeap()

heap.insert(3)
heap.insert(4)
heap.insert(7)
heap.insert(5)
console.log(heap)