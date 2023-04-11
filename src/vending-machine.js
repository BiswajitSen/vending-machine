const dispence2rsCoins = function(rupees) {
  return rupees % 2;
}

const getCoinsCount = function(rupees) {
  return (dispence2rsCoins(rupees)) + (rupees - dispence2rsCoins(rupees) * 2);
}

exports.getCoinsCount = getCoinsCount;
