/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/

// helper method is usefull here
function productOfArray(arr) {
  let result = 1

  function helper(helperInput) {
    //base case
    if (helperInput.length <= 0) return 1
    result = result * helperInput[0]
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) //60