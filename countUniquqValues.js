/*
implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted
*/

// countUniqueValues = (arr) => {
//   // add whatever parameters you deem necessary - good luck!
//   if (arr.length <= 0) return 0;

//   let point1 = 0,
//     point2 = 0;
//   let lookup = {}

//   while (point1 < arr.length - 1) {
//     if (lookup[arr[point2]] === undefined) {
//       point1 = point2
//       lookup[arr[point1]] = true
//     }


//     if (lookup.hasOwnProperty(arr[point2])) {
//       point2++;
//     }


//   }
//   // console.log(lookup)
//   return Object.keys(lookup).length
// }

// function countUniqueValues(arr) {
//   let x = 0,
//     y = 1;
//   while (y < arr.length) {
//     if (arr[x] === arr[y]) {
//       y++
//     }
//     if (arr[x] !== arr[y]) {
//       x++
//       arr[x] = arr[y]
//     }
//   }
//   return x
// }


const countUniqueValues = (arr) => {
  let x = 0,
    y = 0

  while (y < arr.length) {
    if (arr[y] !== arr[y + 1]) {
      x++
    }

    y++
  }

  return x

}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4