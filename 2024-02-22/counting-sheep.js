/* Counting Sheep...
https://www.codewars.com/kata/54edbc7200b811e956000556 */

function countSheeps(sheep) {
  let count = 0;
  for (i = 0; i <= sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }
  return count;
}
