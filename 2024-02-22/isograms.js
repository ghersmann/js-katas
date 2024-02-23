/* Isograms
https://www.codewars.com/kata/54ba84be607a92aa900000f1 */

function isIsogram(str) {
  const count = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (count[char]) {
      return false;
    }
    count[char] = true;
  }
  return true;
}
