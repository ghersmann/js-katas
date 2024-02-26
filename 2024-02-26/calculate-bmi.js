/* Calculate BMI */

function bmi(weight, height) {
  let bimi = weight / (height * height);

  if (bimi <= 18.5) {
    return "Underweight";
  }
  if (bimi <= 25) {
    return "Normal";
  }
  if (bimi <= 30) {
    return "Overweight";
  }
  if (bimi > 30) {
    return "Obese";
  }
}
