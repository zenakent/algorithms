//helper method pattern
function outer(input) {
  var outerScopedVariable = []

  function helper(helperInput) {
    //modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)
  return outerScopedVariable
}

//example implementation
// function collectOddValues(arr) {
//   let result = []

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return
//     }

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0])
//     }

//     helper(helperInput.slice(1))
//   }

//   helper(arr)
//   console.log(result)
//   return result
// }

//pure recursion
function collectOddValues(arr) {
  let newArr = []

  //base case
  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  console.log(newArr)
  return newArr
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])