// 1.3 Prime numbers

const checkNum = 25;

// check if the given number is a prime number
function isPrimeNumber(number) {
  let count = 0;
  let divider = 1;
  for (let i = 1; i < number + 1; i++) {
    if (number % divider === 0) {
      count++;
    }
    divider++;
  }
  return count === 2 ? true : false;
}

console.log(isPrimeNumber(checkNum));

// collect all prime numbers between 0 and the given number (excluding the given number)
function getPrimeNumbersTo(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (isPrimeNumber(i) === true) {
      arr.push(i);
    }
  }
  return arr.join(",");
}

console.log(getPrimeNumbersTo(checkNum));
