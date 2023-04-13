const testing = require('../lib/testing.js');
const arrayUtilities = require('../lib/array-utils.js');

const bubbleSort = arrayUtilities.bubbleSort
const assertArray = testing.assertArray

const testBubbleSort = function(){
  let message = 'Sorting an empty array should return an empty array';
  testing.assertArray([], bubbleSort([]), message );

  message = 'Sorting an array consists of one element should return an array with that element';
  testing.assertArray([1], bubbleSort([1]), message );

  message = 'Sorting an array with multiple positive numbers should return ascending ordered array.';
  testing.assertArray([42], bubbleSort([42]), message);

}

testBubbleSort();
