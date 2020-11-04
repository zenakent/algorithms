//Binary Heap
//child to find parent Math.floor((n-1)/2)
//parent to find child 2n+1 and 2n+2

let heapList = [41, 39, 33, 18, 27, 12]



function insert(val) {
  heapList.push(val)
  let newlyInserted = heapList.length - 1
  return bubbleUp(heapList, newlyInserted)
}

function bubbleUp(list, index) {
  //find the newly inputted's parent
  let parent = Math.floor((index - 1) / 2)
  if (list[index] > list[parent]) {
    let temp = list[index]
    list[index] = list[parent]
    list[parent] = temp

    bubbleUp(list, parent)
  }
  return list
}



console.log(insert(55))


