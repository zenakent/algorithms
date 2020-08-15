//have a functions that merges 2 arrays and it sorts them
function merge(array1, array2) {
  let ans = []

  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      ans.push(array1.shift())
    } else {
      ans.push(array2.shift())
    }
  }

  return [...ans, ...array1, ...array2]
}


let example1 = [8, 6, 4, 2, 0];
let example2 = [1, 3, 5, 7, 9];



function mergeSort(arr) {
  //base case
  if (arr.length === 0 || arr.length === 1) return arr

  let m = Math.ceil(arr.length / 2)
  let firstArr = arr.slice(0, m)
  let secondArr = arr.slice(m, arr.length)
  return merge(mergeSort(firstArr), mergeSort(secondArr))

}

console.log(mergeSort([...example1, ...example2]))