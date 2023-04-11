const getCoinsCount = function(rupees, value) {
  return Math.floor(rupees / value);
}

const dispenseCoins = function(rupees, currencies) {
  let count = 0;
  let totalMoney = rupees;
  for ( let current = currencies.length - 1; current >= 0; current--) {
    count += getCoinsCount(totalMoney, currencies[current]);
    totalMoney %= currencies[current];
  }

  return count += totalMoney;

}

exports.dispenseCoins = dispenseCoins;
