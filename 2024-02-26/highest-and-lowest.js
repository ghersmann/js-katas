/* Highest and Lowest */

function highAndLow(numbers) {
  let spl = numbers.split(" ");
  let maxi = Math.max(...spl);
  let mini = Math.min(...spl);
  return `${maxi} ${mini}`;
}
