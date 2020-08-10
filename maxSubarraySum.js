/*
Given an arary of integers and a number, write a  fucntion called maxSubarraySum.
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of the consecutive elements from the original array. 
In the first example below, [100,200,300] is a subarray of the original array, but [100,300] is not
*/

function maxSubarraySum(array, length) {
  if (array.length < length) return null

  let maxSum = 0;

  for (let i = 0; i < length; i++) {
    maxSum += array[i]
  }
  let tempSum = maxSum
  for (let i = length; i < array.length; i++) {
    tempSum = tempSum - array[i - length] + array[i]
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, 1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
console.log(maxSubarraySum([2, 3], 3)) //null