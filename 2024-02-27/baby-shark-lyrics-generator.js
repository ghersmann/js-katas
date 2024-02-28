/* Baby shark lyrics generator */

//Long version

function babySharkLyrics() {
  let a = ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa", "Let's go hunt"];
  let [d, s, c, x] = [" doo", " shark", ",", "!"];
  let ut =
    (a[0] + s + c + d.repeat(6) + "\n").repeat(3) +
    (a[0] + s + x + "\n") +
    (a[1] + s + c + d.repeat(6) + "\n").repeat(3) +
    (a[1] + s + x + "\n") +
    (a[2] + s + c + d.repeat(6) + "\n").repeat(3) +
    (a[2] + s + x + "\n") +
    (a[3] + s + c + d.repeat(6) + "\n").repeat(3) +
    (a[3] + s + x + "\n") +
    (a[4] + s + c + d.repeat(6) + "\n").repeat(3) +
    (a[4] + s + x + "\n") +
    (a[5] + c + d.repeat(6) + "\n").repeat(3) +
    (a[5] + x + "\n") +
    "Run away,…";
  console.log(ut);
  return ut;
}

//Correct version - if you remove spaces and breaks

babySharkLyrics = () => {
  a = ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa", "Let's go hunt"];
  [d, s, c, x] = [" doo", " shark", ",", "!"];
  ut = "";
  for (i = 0; i < a.length - 1; i++) {
    ut +=
      (a[i] + s + (i !== 5 ? c + d.repeat(6) : "") + "\n").repeat(3) +
      (a[i] + s + x + "\n");
  }
  return (ut +=
    (a[5] + c + d.repeat(6) + "\n").repeat(3) +
    (a[5] + x + "\n") +
    "Run away,…");
};
