const toBinary = (num, arr = []) => {
  if (num === 0) return arr;
  arr.unshift(num % 2)
  return toBinary(Math.floor(num / 2), arr)
}

console.log(toBinary(6))