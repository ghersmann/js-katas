/* Even numbers in an array
https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/javascript */

const evenNumbers = (a, n) => {
  const isEven = (sif) => sif % 2 === 0;
  const filt = a.filter(isEven);
  return filt.slice(-n);
};
