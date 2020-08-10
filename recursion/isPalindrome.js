/*
Write a recursive function called isPalindrome which returns true if the strings passes to it is a palindrome
(reads the same forward and backward). Otherwise it returns false
*/



function isPalindrome(string) {
  let ans = []
  string = string.split('')

  function helper(input) {
    if (input.length === 0) return
    let lastLetter = input[input.length - 1]
    ans.push(lastLetter)
    //slice the last letter
    input = input.slice(0, input.length - 1)
    helper(input)
  }

  helper(string)
  return ans.join('') === string.join('')
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false