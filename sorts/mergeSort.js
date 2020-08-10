//merge
function merge(array1, array2) {
  let ans = [],
    arr1 = [...array1],
    arr2 = [...array2]

  while (arr1.length >= 0 && arr2.length >= 0) {
    if (arr1[0] <= arr2[0]) {
      ans.push(arr1[0])
      arr1.shift()

    } else if (arr2[0] <= arr1[0]) {
      ans.push(arr2[0])
      arr2.shift()

    } else if (arr1.length === 0) {
      ans = ans.concat(arr2)
      break
    } else if (arr2.length === 0) {
      ans = ans.concat(arr1)
      break
    }
  }
  return ans
}

function mergeSort(array) {
  if (array.length === 0 || array.length === 1) return array

  let m = Math.floor(array.length / 2)
  let arr1 = [...array.slice(0, m)]
  let arr2 = array.slice(m, array.length)
  return merge(mergeSort(arr1), mergeSort(arr2))
}


// let array = [33, 71, 24, 98, 76, 4, 15, 46, 68, 21, 60, 25, 96, 12, 83, 9, 64, 66, 0, 5, 10, 36, 57, 9, 90, 21, 3, 8, 25, 73, 21, 14, 74, 15, 36, 29, 10, 76, 59, 11, 39, 69, 77, 98, 3, 83, 85, 59, 16, 61, 4, 84, 87, 89, 68, 5, 6, 4, 0, 56, 61, 96, 17, 59, 99, 42, 21, 98, 22, 86, 52, 57, 43, 18, 39, 0, 22, 60, 62, 15, 30, 80, 34, 0, 78, 1, 93, 32, 81, 56, 81, 55, 58, 33, 94, 78, 95, 32, 92, 38]
let array = []
for (let x = 0; x <= 100000; x++) {
  array.push(Math.floor(Math.random() * 1000))
}


// console.log(mergeSort([3, 44, 6, 99, 15, 33, 56, 1]))
console.log(mergeSort(array))