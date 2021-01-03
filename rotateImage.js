rotateImage = a => a.map((row, rowIndex) => a.map(val => {
  console.log('val', val, 'rowIndex', rowIndex)
  console.log(val[rowIndex])
  return val[rowIndex]
}).reverse())

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(rotateImage(arr))