/* Abbreviate a Two Word Name
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3 */

function abbrevName(name) {
  const vorName = name.split(" ");
  const firstInitial = vorName[0][0];
  const lastInitial = vorName[1][0];
  return (firstInitial + "." + lastInitial).toUpperCase();
}
