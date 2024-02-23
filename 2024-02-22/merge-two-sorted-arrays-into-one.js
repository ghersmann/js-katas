/* Merge two sorted arrays into one
www.codewars.com/kata/5899642f6e1b25935d000161 */

function mergeArrays(arr1, arr2) {
  const beide = arr1.concat(arr2);
  beide.sort((a, b) => a - b);
  const nureins = [...new Set(beide)];
  return nureins;
}

function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort((a, b) => a - b);
  let sorted = [...new Set(merged)];
  console.log(merged);
  return sorted;
}
