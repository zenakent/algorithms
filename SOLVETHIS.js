// let restaurant = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 1, 0, 1, 1, 1],
//   [0, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 0, 0],
//   [0, 0, 1, 1, 0, 0],
// ]

let restaurant = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
]

function largestGroup(data) {
  let largestGroup = 0
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {

      if (data[i][j] === 1) {
        let x = i, y = j, x2 = i, y2 = j;
        let side1 = 0, side2 = 0;
        while (data[x][y] === 1) {
          side1++
          data[x][y] = 2
          y++
        }
        while (x2 < data.length && (data[x2][y2] === 1 || data[x2][y2] === 2)) {
          side2++;
          data[x2][y2] = 2
          x2++;
        }
        largestGroup = Math.max(largestGroup, side1 * side2)
      }
    }
  }
  console.log(largestGroup)
  return largestGroup
}



largestGroup(restaurant)