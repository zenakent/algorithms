function decryptPassword(str) {
  // Write your code here
  let regex = /\*/gm
  //remove all the * since they are not part of the original password
  let matches = str.replace(regex, '')
  let s = matches.split('').map(x => {
    return isNaN(x) ? x : Number(x)
  })
  let i = s.length - 1;
  while (i > 0) {
    if (Number(s[i]) === 0) {
      //get the very first number of the string
      let numberAtStart = s[0]
      s[i] = numberAtStart
      s.shift()
      i--
    } else if ((isNaN(s[i]) && s[i] === s[i].toLowerCase()) && (isNaN(s[i - 1]) && s[i - 1] === s[i - 1].toUpperCase())) {
      //if current is lowercase and next is uppercase, swap them
      let temp = s[i];
      s[i] = s[i - 1];
      s[i - 1] = temp;
      i -= 2
    } else {
      i--
    }
  }
  return s.join('')
}

let string = '6UDTyn0Hm*BqBp*ur'

console.log(decryptPassword(string))
