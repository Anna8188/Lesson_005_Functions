"use strict";
/*Task 7;

  Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

   Input “dfgjkloyp”; Output “fgdkljypo”;

   Input “aweyoolp”;  Output “weaooylp”;
*/
function abcTObca(string) {
  let newStr = "";
  for (let i = 1; i < string.length; i = i + 3) {
    newStr = newStr + string[i] + string[i + 1] + string[i - 1];
  }
  return newStr;
}
