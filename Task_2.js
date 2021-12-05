"use strict";
/*Task 2.
  Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol. Write appropriate function for each operation.
*/
function calculate(arr, symbol) {
  let temp = 0;
  let temp2 = 1;

  if (symbol === "+") {
    for (let i = 0; i < arr.length; i++) {
      temp = temp + arr[i];
    }
    return temp;
  }
  if (symbol === "-") {
    for (let i = 0; i < arr.length; i++) {
      temp = temp - arr[i];
    }
    return temp;
  }
  if (symbol === "/") {
    for (let i = 0; i < arr.length; i++) {
      temp2 = temp2 / arr[i];
    }
    return temp2;
  }
  if (symbol === "*") {
    for (let i = 0; i < arr.length; i++) {
      temp2 = temp2 * arr[i];
    }
    return temp2;
  }
  return -1;
}
