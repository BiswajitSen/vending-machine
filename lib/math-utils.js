const quotient = function(dividend, divisor){
  return Math.floor(dividend / divisor);
}

const remainder = function(dividend, divisor){
  return dividend % divisor;
}

const countTotal = function(numbers){
  let sum = 0;

  for (const number of numbers) {
    sum = sum + number;
  }

  return sum;
}

exports.quotient = quotient;
exports.remainder = remainder;
exports.countTotal = countTotal;

