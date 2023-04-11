const dispenceCoins = function(rupees, value) {
  return Math.floor(rupees / value);
}

const getCoinsCount = function(rupees, currencies) {
  let count = 0;
  let totalMoney = rupees;
  for ( let i = currencies.length - 1; i >= 0; i--) {
    count += dispenceCoins(totalMoney, currencies[i]);
    totalMoney %= currencies[i];
  }

  return count += totalMoney;

}

exports.getCoinsCount = getCoinsCount;
