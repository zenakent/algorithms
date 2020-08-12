//3 way merge
// function merge(array1, array2, array3) {
//   let ans = []

//   while (array1.length > 0 && array2.length > 0) {
//     if (array1[0] <= array2[0]) {
//       ans.push(array1.shift())
//     } else if (array2[0] <= array1[0]) {
//       ans.push(array2.shift())
//     }
//   }

//   ans = [...ans, ...array1, ...array2]

//   let final = []
//   while (ans.length > 0 && array3.length > 0) {
//     if (ans[0] <= array3[0]) {
//       final.push(ans.shift())
//     } else {
//       final.push(array3.shift())
//     }
//   }
//   return [...final, ...ans, ...array3]
// }

function merge(array1, array2, array3) {
  function sortMerge(arr1, arr2) {
    let something = []
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] <= arr2[0]) {
        something.push(arr1.shift())
      } else if (arr2[0] <= arr1[0]) {
        something.push(arr2.shift())
      }
    }
    return [...something, ...arr1, ...arr2]
  }
  return sortMerge(sortMerge(array1, array2), array3)
}



function threeWayMergeSort(array) {
  if (array.length <= 1) return array;

  let m = Math.ceil(array.length / 3)
  let arr1 = array.splice(0, m)
  let arr2 = array.splice(0, m)
  let arr3 = array

  return merge(threeWayMergeSort(arr1), threeWayMergeSort(arr2), threeWayMergeSort(arr3))
}

// console.log(threeWayMergeSort([3, 44, 6, 99, 15, 33, 56, 1]))

// let array = [
//   4, 14, 11, 15, 10, 7, 15, 8, 18,
//   4, 19, 13, 16, 4, 1, 2, 3, 12,
//   0, 12, 2, 10, 2, 3, 1, 12, 10,
//   10, 10, 1, 
// ]

// let array = [33, 71, 24, 98, 76, 4, 15, 46, 68, 21, 60, 25, 96, 12, 83, 9, 64, 66, 0, 5, 10, 36, 57, 9, 90, 21, 3, 8, 25, 73, 21, 14, 74, 15, 36, 29, 10, 76, 59, 11, 39, 69, 77, 98, 3, 83, 85, 59, 16, 61, 4, 84, 87, 89, 68, 5, 6, 4, 0, 56, 61, 96, 17, 59, 99, 42, 21, 98, 22, 86, 52, 57, 43, 18, 39, 0, 22, 60, 62, 15, 30, 80, 34, 0, 78, 1, 93, 32, 81, 56, 81, 55, 58, 33, 94, 78, 95, 32, 92, 38]
let array = [3, 44, 6, 99, 15, 33, 56, 1]
// for (let x = 0; x <= 100000; x++) {
//   array.push(Math.floor(Math.random() * 1000))
// }

console.log(threeWayMergeSort(array))