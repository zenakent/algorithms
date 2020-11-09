//child to find parent Math.floor((n-1)/2)
//parent to find child 2n+1 and 2n+2

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  //insert
  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    //get the index of the last element
    let idx = this.values.length - 1
    //get the last element
    let element = this.values[idx]
    //loop while the idx > 0 is true
    while (idx > 0) {
      //get the parent index
      let parentIdx = Math.floor((idx - 1) / 2)
      //get the parent element
      let parent = this.values[parentIdx]
      //end the loop when the element is in the right place
      if (element <= parent) break;
      //swap the element with the parentIdx
      this.values[parentIdx] = element
      //swap the parent with the idx
      this.values[idx] = parent
      //swap the idx value with the parentIdx value
      idx = parentIdx
    }
  }

  // extractMax() {
  //   //get the biggest number in the list
  //   const max = this.values[0]
  //   //get the last number in the list and remove it
  //   const end = this.values.pop()
  //   if (this.values.length > 0) {
  //     //place the last number at the very top of the list
  //     this.values[0] = end
  //   }

  extractMax() {
    //get the biggest number in the list
    const max = this.values[0]
    //get the last number in the list and remove it
    const end = this.values.pop()

    if (this.values.length === 0) {
      console.log(max)
      return (max)
    }

    //if the length is greater than 0, do this
    if (this.values.length > 0) {
      //place the last value at the start of the list
      this.values[0] = end
      //a function to put the last element in it's right place
      this.sinkDown()
    }



    console.log(max)
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

      //make sure that leftIdx value is less than the length of the list so it's not out of bounds
      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        //if leftChild is greater than the element(element being the first one in the list), make swap = leftIdx
        if (leftChild > element) {
          swap = leftIdx;
        }
      }

      //make sure that rightIdx value is less than the length of the list so it's not out of bounds
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        //if a swap did not happen from the previous if statement and the rightChild is greater than the element(element being the first one in the list)
        //or a swap happened from the prev if statement and the right child is rightChild is > leftChild,
        //make swap = right Idx
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightIdx;
        }
      }

      //if no swap happened break the loop 
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  findTheParent(idx) {
    if (idx === 0) {
      console.log(`This is the root`)
      return idx
    }
    const parentIdx = Math.floor((idx - 1) / 2)
    const parent = this.values[parentIdx]
    console.log(`This is the parent of index ${idx}: ${parent}`)
    return parent
  }

}


const heap = new MaxBinaryHeap()

heap.insert(1)
heap.insert(2)
heap.extractMax()


console.log(heap)