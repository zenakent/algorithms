let array1 = [6, 9, 8, 7, 11, 5, 4, 3, 2, 1, 0];

//needs a pivot
//what does a pivot do? it is the value that you compare to the rest of the numbers to put which ones are on the left side of it or the right side
//it takes in an array
function pivot(array, start = 0, end = array.length - 1) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }

  let pivot = array[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIdx++
      swap(array, swapIdx, i)
    }
  }
  swap(array, start, swapIdx)

  return swapIdx
}

function quicksort(array, left = 0, right = array.length) {
  //base case is if left = 0 < right = array.length, the right will be deducted as the recursion occurs
  if (left < right) {
    let pivotIdx = pivot(array, left, right);

    //sort the left side
    quicksort(array, left, pivotIdx)
    //sort the right side
    quicksort(array, pivotIdx + 1, right)

    return array
  }

}

console.log(quicksort(array1))