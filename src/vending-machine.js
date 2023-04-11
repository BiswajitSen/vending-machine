const dispence2rsCoins = function(rupees) {
  return rupees % 2;
}

const intDivByTwo = function(rupees) {
  if(rupees < 2) return 0;
  return Math.floor(rupees / 2);
}

const intDivByFive = function(rupees) {
  if(rupees < 5 ) return 0;
  return Math.floor(rupees / 5);
}

const intDivByTen = function(rupees) {
  if(rupees < 10 ) return 0;
  return Math.floor(rupees / 10);
}
const coinOfOne = function(rupees) {
  return rupees;
}
const getCoinsCount = function(rupees) {
  let count = 0;
  let totalMoney = rupees;

  count += intDivByTen(totalMoney);
  totalMoney = totalMoney % 10;

  count += intDivByFive(totalMoney);
  totalMoney = totalMoney % 5;

  count += intDivByTwo(totalMoney);
  totalMoney = totalMoney % 2;

  return count += totalMoney;

}

exports.getCoinsCount = getCoinsCount;
