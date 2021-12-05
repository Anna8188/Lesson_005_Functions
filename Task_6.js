"use strict";
/*Task 6
  Write a function which receives two strings and removes appearances of the second string from the first one.
   Input “This is some text.”, “is”;
   Output “Th some text.”;
   Input “Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather”, “o”;
   Output “Yes, Lndn. Yu knw: fish, chips, cup ‘ tea, bad fd, wrse weather”;
*/

function f(str, substring) {
  let newstr = str.replace(substring, "");
  if (newstr.length !== str.length) {
    return f(newstr, substring);
  }
  return newstr;
}
console.log(f("This is some text.", "is"));
