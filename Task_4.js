"use strict";
/*Task 4
  Given a word and a list of possible anagrams, select the correct sublist.
   Input “listen”, ["enlists", "google", "inlets", "banana"];
   Output [“inlets”];
   
   Input “pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”];
   Output [“licnep”, nilcpe];
*/

function anagrams(input, words) {
  let arr = [];
  var sort = input.split("").sort().join("");
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").sort().join("") === sort) {
      arr.push(words[i]);
    }
  }
  return arr;
}
