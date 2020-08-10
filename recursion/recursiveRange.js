/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
*/


//its a factorial except its addition instead of multiplication
function recursiveRange(num) {
  if (num === 1) return num;
  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(6)) //21
console.log(recursiveRange(10)) //55