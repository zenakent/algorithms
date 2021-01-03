function sockMerchant(n, ar) {
  let ans = [];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === 'x') {
      continue;
    } else {
      let j = i + 1
      while (ar[i] !== ar[j]) {
        if (j > n - 1) break;
        j++
      }
      if (j >= n) {
        continue;
      };
      ans.push([i, j])
      ar[i] = 'x';
      ar[j] = 'x';
    }

  }
  console.log(ar)
  return ans.length
}

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))