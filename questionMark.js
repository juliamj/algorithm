// 1.2 Question Marks

function questionMarks(str) {
  let iNumArr = [];
  let numArr = [];
  let iQmArr = [];
  let iNum1 = 0;
  let iNum2 = 1;
  let pass = null;
  let fail = null;
  let checkSum = true;

  for (let i = 0; i < str.length; i++) {
    // create an array of numbers and an array of its indexes
    if (Number(str[i])) {
      const num = Number(str[i]);
      const index = i;
      iNumArr.push(index);
      numArr.push(num);
    }
    // create an array of the QM indexes
    if (str[i] === "?") {
      const index = i;
      iQmArr.push(index);
    }
  }
  // check each number-pair if it adds up to 10
  for (let i = 1; i < numArr.length; i++) {
    let a = numArr[iNum1];
    let b = numArr[iNum2];
    let sum = a + b;
    // check if there are exactly 3 QM between every pair of two numbers whose sum is 10
    if (sum === 10) {
      // note if there does't exist any pair of numbers whose sum is 10
      checkSum = false;
      // check for the 3 qm
      let qmCount = 0;
      for (let i = 0; i < iQmArr.length; i++) {
        if (iQmArr[i] > iNumArr[iNum1] && iQmArr[i] < iNumArr[iNum2]) {
          qmCount++;
        }
      }
      qmCount === 3 ? (pass = true) : (fail = true);
    }
    iNum1++;
    iNum2++;
  }
  // check if there exists at least one pair of numbers whose sum is 10
  if (checkSum) {
    return false;
  }
  // final result
  if (fail) {
    return false;
  }
  if (pass) {
    return true;
  }
}

console.log(questionMarks("acc?7??sss?3rr1??????5"));
