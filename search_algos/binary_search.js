/*
Write a function called binarySearch which accepts a sorted array 
and a value and returns the index at which the value exists. Otherwise, return -1. 


This algorithm should be more efficient than linearSearch
you can read how to implement it here 

https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
and here
https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

function binarySearch(array, value) {
  let min = 0,
    max = array.length


  while (min < max) {
    let middle = Math.floor((min + max) / 2)
    if (array[middle] === value) {
      return middle
    } else if (array[middle] > value) {
      max--
    } else if (array[middle] < value) {
      min++
    }
  }

  return -1
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)) //1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)) //2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)) //4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)) //-1