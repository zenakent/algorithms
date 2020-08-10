/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/

function reverse(string) {
  let ans = []
  string = string.split('')


  function helper(input) {
    //base case
    if (input.length === 0) return;
    let lastLetter = input[input.length - 1]
    ans.push(lastLetter)
    //slice off the last letter
    input = input.slice(0, input.length - 1)
    helper(input)
  }

  helper(string)
  return ans.join('')
}

console.log(reverse('awesome'))
console.log(reverse('rithmschool'))