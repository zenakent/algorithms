//not recursion
// function factorial(num) {
//   let total = 1

//   while (num > 0) {
//     total = total * num
//     num--
//   }

//   console.log(total)
//   return total
// }


//recursion
function factorial(num) {
  if (num < 0) return 0;
  if (num === 1) return 1
  return num * factorial(num - 1)
}

console.log(factorial(7))