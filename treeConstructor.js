// 1.4 Tree Constructor

function constructTree(strArr) {
  let chArr = [];
  let chArr1 = [];
  let parArr = [];
  let parArr1 = [];
  let parArr2 = [];
  let parArr3 = [];
  let arrLgth = strArr.length;
  let count = 0;

  // replace each string in the array with an array
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    let splitArr = strArr[i].split("");
    splitArr.pop();
    splitArr.shift();
    let str = splitArr.join("");
    let splitArr1 = str.split(",");
    arr.push(splitArr1);
  }

  // create an array for child-nodes (i1) and one for parent-nodes (i2)
  for (let i = 0; i < arr.length; i++) {
    chArr.push(arr[i][0]);
    parArr.push(arr[i][1]);
  }

  // check if all integers within the binary tree are unique
  for (let i = 0; i < arrLgth; i++) {
    chArr1.unshift(chArr[0]);
    chArr.shift();
    if (chArr.includes(chArr1[0])) {
      count++;
      console.log(`false - not all integers are unique`);
    }
  }

  // check if each parent-node has no more than 2 child-nodes
  for (let i = 0; i < arrLgth; i++) {
    if (parArr1.includes(parArr[0])) {
      if (parArr2.includes(parArr[0])) {
        parArr3.unshift(parArr[0]);
        parArr.shift();
      } else {
        parArr2.unshift(parArr[0]);
        parArr.shift();
      }
    } else {
      parArr1.unshift(parArr[0]);
      parArr.shift();
    }
    if (parArr3.length > 0) {
      count++;
      console.log(
        `false - one or more parent-nodes have more than two child-nodes`
      );
    }
  }
  return count > 0 ? false : true;
}

console.log(constructTree(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
