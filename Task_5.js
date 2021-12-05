"use strict";
/*Task 5
  Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
   Input “FwrtY45KHL120mn10P”;
   Output 175;
   Input “Wert12lop-12”;
   Output 0;
*/
function getSum(arr) {
  let sum = 0;
  let temp = "0";
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      temp = temp + arr[i];
    } else {
      sum = sum + parseInt(temp);
      temp = "0";
    }
  }
  return sum + parseInt(temp);
}
