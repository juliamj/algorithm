// 1.1 Factorial

function factorial(num) {
  let count = num;
  let result = num;

  for (let i = 0; i < num - 1; i++) {
    count--;
    result *= count;
  }
  return result;
}

console.log(factorial(4));
