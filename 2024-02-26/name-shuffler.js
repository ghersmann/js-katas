/* Name Shuffler */

function nameShuffler(str) {
  let array = str.split(" ");
  let switched = array.reverse();
  return switched.join(" ");
}
