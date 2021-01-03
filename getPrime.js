//sieve of Eratosthenes

//get an array of primes up to num
function getPrimes(num) {
  var a = [...Array(num + 1).keys()]; // =[0,1,...,num]
  a[1] = 0; // 1 is not prime
  var rt = Math.sqrt(num); // calculate only once
  for (i = 2; i <= rt; i++) {
    for (var j = i * i; j <= num; j += i) a[j] = 0;
  }
  return a.filter(Number); // kick out the zeroes
}
// run it for 30
var a = getPrimes(33);
// Output
// console.log(a);

//check if a number is prime
function isPrime(num) {
  let listOfPrimes = getPrimes(num)
  return listOfPrimes.includes(num)

}

console.log(isPrime(33))