/* Get the Middle Character
https://www.codewars.com/kata/56747fd5cb988479af000028*/

function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  console.log(middle);
  if (s.length % 2 === 0) {
    return s.substring(middle - 1, middle + 1);
  } else {
    return s.charAt(middle);
  }
}
