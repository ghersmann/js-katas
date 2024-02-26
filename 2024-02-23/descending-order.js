/* Descending Order
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript */

function descendingOrder(n) {
  let str = n.toString();
  let split = str.split("");
  let sorted = split.sort((a, b) => b - a);
  let joined = sorted.join("");
  let result = Number(joined);
  return result;
}
