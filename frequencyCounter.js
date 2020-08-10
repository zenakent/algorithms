/*
Write a function called sameFrequency. Given 2 positive intergers, find out if the 2 numbers have the same frequency of digits.
Your solution Must have the ff complexities

Time: O(n)
*/


function sameFrequency(int1, int2) {
  let lookup1 = {}
  let lookup2 = {}

  int1 = int1.toString().split('')
  int2 = int2.toString().split('')

  for (let x = 0; x < int1.length; x++) {
    let num = int1[x]
    lookup1[num] ? lookup1[num] += 1 : lookup1[num] = 1
  }

  for (let x = 0; x < int2.length; x++) {
    let num = int2[x]
    lookup2[num] ? lookup2[num] += 1 : lookup2[num] = 1
  }

  for (let key in lookup1) {
    if (lookup1[key] !== lookup2[key]) {
      return false
    }
  }
  return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false