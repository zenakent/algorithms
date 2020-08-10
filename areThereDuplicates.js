/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are duplicates
among the argumetns passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/


//frequency counter solution
// function areThereDuplicates() {
//   let args = [...arguments]
//   let lookUp = {}
//   for (let x of args) {
//     console.log(x)
//     lookUp[x] ? lookUp[x]++ : lookUp[x] = 1
//     if (lookUp[x] > 1) {
//       return true
//     }
//   }
//   return false
// }

//multiplePointers solution
function areThereDuplicates(...args) {

  console.log(args.sort())

  for (let x = 0; x < args.length; x++) {
    if (args[x] === args[x + 1]) {
      return true
    }
  }
  return false
}


console.log(areThereDuplicates(1, 2, 3)) //false
console.log(areThereDuplicates(1, 2, 2)) //true
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a')) //true
console.log(areThereDuplicates(100, 24, 397, 100)) //true