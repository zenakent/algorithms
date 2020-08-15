/*a radix sort needs 3 things...
1.) a function gets the number of the its place i.e get the 100th place/digit number 345 = 3
2.) a function that counts how long a number is... i.e 12345 = 5
3.) a function that looks for the longest/lenghtiest number 123,12345,123456 = 6
*/

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// console.log(getDigit(9876543210, 0))

function countDigits(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// console.log(countDigits(9876543210))

function longestDigit(array) {
  let max = 0
  for (let x = 0; x < array.length; x++) {
    max = Math.max(max, countDigits(array[x]))
  }
  return max
}

function radixSort(array) {
  let longestDigitCount = longestDigit(array)
  for (let i = 0; i < longestDigitCount; i++) {
    let well = [[], [], [], [], [], [], [], [], [], []]
    for (let j = 0; j < array.length; j++) {
      let bucket = getDigit(array[j], i)
      well[bucket].push(array[j])
    }
    array = well.flat()
  }
  return array
}

let array = [33, 71, 24, 98, 76, 4, 15, 46, 68, 21, 60, 25, 96, 12, 83, 9, 64, 66, 0, 5, 10, 36, 57, 9, 90, 21, 3, 8, 25, 73, 21, 14, 74, 15, 36, 29, 10, 76, 59, 11, 39, 69, 77, 98, 3, 83, 85, 59, 16, 61, 4, 84, 87, 89, 68, 5, 6, 4, 0, 56, 61, 96, 17, 59, 99, 42, 21, 98, 22, 86, 52, 57, 43, 18, 39, 0, 22, 60, 62, 15, 30, 80, 34, 0, 78, 1, 93, 32, 81, 56, 81, 55, 58, 33, 94, 78, 95, 32, 92, 38]

console.log(radixSort(array))