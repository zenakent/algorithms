function mergeStrings(s1, s2) {
  //check first if all letters in strings only occures once  

  if (checker(s1) && checker(s2) === false) {
    return s1 + s2
  } else if (checker(s2) && checker(s1) === false) {
    return s2 + s1
  }
  //merge lexicographically
  let answer = mergeLexico(s1, s2)
  return answer
}

function mergeLexico(s1, s2, ans = '') {
  //base case
  console.log(s1.length, s2.length)

  if (s1.length === 0 && s2.length === 0) {
    console.log('line 21', ans)
    return ans
  }
  let code1 = s1.charCodeAt(0)
  let code2 = s2.charCodeAt(0)
  if (code1 < code2) {
    ans += s1[0]
    return mergeLexico(s1.substring(1), s2, ans)
  } else if (code2 < code1) {
    ans += s2[0]
    return mergeLexico(s1, s2.substring(1), ans)
  } else if (isNaN(code1)) {
    ans += s2[0]
    return mergeLexico(s1, s2.substring(1), ans)
  } else if (isNaN(code2)) {
    ans += s1[0]
    return mergeLexico(s1.substring(1), s2, ans)
  }

}

function checker(string) {
  let lookUp = {}
  for (let letter of string) {
    if (!lookUp[letter]) {
      lookUp[letter] = 1
    } else if (lookUp[letter]) {
      return false
    }
  }
  return true
}

console.log(mergeStrings('super', 'tower'))