"use strict";
/*Task 11
  Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.
   Input 19, 42;
   Output “20, 22, 24, 26, 28, 40, 42”;
   Input [1, 3, 5, 9];
   Output [1, 3, 5, 9], [];
*/
function Even(num1, num2) {
  let arr = [];
  if (num1 > 100 || num2 > 100) {
    return "Such numbers does not exist.";
  }
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  let newArr = String(arr).split(",");
  arr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] % 2 === 0) {
      arr.push(newArr[i]);
    }
  }
  return arr;
}
