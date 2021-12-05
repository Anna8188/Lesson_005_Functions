"use strict";
/*Task 3

  Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

  1.If the phone number is less than 10 digits assume that it is a bad number
  2.If the phone number is longer than 10, then it is a bad number
  3.If the phone number is 10 digits assume that it is good
  4.If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim + and return remaining 10 digits.
  5.If the phone number contains + symbol more than one, consider it as a bad number.
  6.If the phone number contains + symbol not as the first character, consider it as a badnumber.

   Input “455678”         Output “Bad number”;
   Input “339 5656888”    Output “3395656888”;
   Input “+0008989562”    Output “0008989562”;
   Input “45231489562”    Output “Bad number”;
   Input “123+2356897452” Output “Bad number”;
*/
function checkNumber(string) {
  let num = string.replace(" ", "");
  let Number = num.replace("+", "");
  for (let i = 1; i < num.length; i++) {
    if (num[i] === "+") {
      return "Bad number";
    } else if (Number.length !== 10) {
      return "Bad number";
    } else {
      return Number.replace();
    }
  }
}
