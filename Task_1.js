"use strict";
/*Task 1
  Given a number. Print “odd” if the number is odd and “even” if it is even.
   Input [45, 12, 3, 6, 17, 0];
   Output [45, 3, 17], [12, 6, 0];
   Input [1, 3, 5, 9];
   Output [1, 3, 5, 9], [];
*/
function isEven(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i] % 2) {
      case 0:
        even.push(arr[i]);
        break;
      default:
        odd.push(arr[i]);
    }
  }
}
