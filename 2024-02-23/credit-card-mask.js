/* Credit card Mask */

function maskify(cc) {
  let visible = cc.slice(-4);
  let countNum = "";
  for (let i = cc.length - 4; i > 0; i--) {
    countNum += "#";
  }
  return countNum + visible;
}
