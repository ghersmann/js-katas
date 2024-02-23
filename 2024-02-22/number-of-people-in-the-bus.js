/* Number of people in the bus
https://www.codewars.com/kata/5648b12ce68d9daa6b000099 */

var number = function (busStops) {
  let count = 0;
  for (i = 0; i < busStops.length; i++) {
    count += busStops[i][0];
    count -= busStops[i][1];
  }
  return count >= 0 ? count : 0;
};
