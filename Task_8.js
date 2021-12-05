"use strict";
/*Task 8
  Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string. If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).
   Input “A revolution without dancing is a revolution not worth having.”;
   Output “revolution”;
   Input ”Which would be worse - to live as a monster, or to die as a good man?”;
   Output “monster”;
*/
function longestWord(sent) {
  let arr = sent.split(" ");
  let lenArr = [];
  for (let i = 0; i < arr.length; i++) {
    lenArr.push(arr[i].length);
  }

  let maxLen = Math.max.apply(null, lenArr);
  return arr[lenArr.indexOf(maxLen)];
}
