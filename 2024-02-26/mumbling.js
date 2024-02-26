/* Mumbling */

function accum(s) {
  let sarray = s.split("");
  let resultat = "";

  for (let i = 0; i < sarray.length; i++) {
    for (let c = 0; c < i + 1; c++) {
      if (c === 1) {
        resultat += sarray[i].toUpperCase();
      } else {
        resultat += sarray[i].toLowerCase();
      }
    }
    if (i !== sarray.length - 1) {
      resultat += "-";
    }
  }
  return resultat;
}
