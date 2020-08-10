function countDown(num) {
  //write the base case
  if (num <= 0) {
    console.log('all done')
    return "all done"
  }

  console.log(num);
  num--
  countDown(num)
}

countDown(5)