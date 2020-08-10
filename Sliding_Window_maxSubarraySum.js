/*
Given an array of integers, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100,200,300] is a subarray of the original array, but [100,300] is not
*/

// maxSubarraySum = (array, length) => {
//   if (array.length < length) return null;

//   let maxSum = 0
//   for (let i = 0; i < length; i++) {
//     maxSum += array[i]
//   }

//   let tempSum = maxSum;
//   for (let i = length; i < array.length; i++) {
//     tempSum = tempSum - array[i - length] + array[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum
// }

function maxSubarraySum(arr, length) {
  let maxSum = 0;

  for (let x = 0; x < length; x++) {
    maxSum += arr[x]
  }

  let tempSum = maxSum
  for (let x = length; x < arr.length; x++) {
    tempSum = tempSum - arr[x - length] + arr[x]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}



console.log(maxSubarraySum([100, 200, 300, 400], 2)) //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) //5
console.log(maxSubarraySum([2, 3], 3)) //null