/* Band name Generator */

function bandNameGenerator(str) {
  let array = str.split("");
  let firstInd = array[0];
  let lastInd = array[array.length - 1];

  if (firstInd === lastInd) {
    let bigA = array[0].toUpperCase();
    let endA = array.slice(1).join("");
    let bandAnd = `${bigA}${endA}${endA}`;
    return bandAnd;
  } else {
    let bigB = array[0].toUpperCase();
    let endB = array.slice(1).join("");
    let theBand = `The ${bigB}${endB}`;
    return theBand;
  }
}
