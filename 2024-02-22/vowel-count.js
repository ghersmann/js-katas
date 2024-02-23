/* Vowel Count
https://www.codewars.com/kata/54ff3102c1bad923760001f3 */

function getCount(str) {
  let count = 0;
  for (i = 0; i <= str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
    if (str[i] === "e") {
      count++;
    }
    if (str[i] === "i") {
      count++;
    }
    if (str[i] === "o") {
      count++;
    }
    if (str[i] === "u") {
      count++;
    }
  }
  return count;
}
