/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonnaci sequence.
Recall that the Fibonnaci sequence is the sequence of whole numbers 1,1,2,3,5,8,... which starts at 1 and 1, and
where every number thereafter is equal to the sum of the two previous number
*/

function fib(nth) {
  let arr = [1, 1]

  function helper(helperInput) {
    if (helperInput.length === nth) return;
    let sum = helperInput[helperInput.length - 1] + helperInput[helperInput.length - 2]
    arr.push(sum)
    helper(helperInput)
  }
  helper(arr)

  return arr[arr.length - 1]
}

console.log(fib(4)) //3
console.log(fib(10)) //55
console.log(fib(28)) //317811
console.log(fib(35)) //9227465