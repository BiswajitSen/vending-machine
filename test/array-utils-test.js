const testing = require('../lib/testing.js');
const arrayUtilities = require('../lib/array-utils.js');

const bubbleSort = arrayUtilities.bubbleSort
const assertArray = testing.assertArray
const displaySummary = testing.displaySummary;
const title = testing.displayHeader;

const testBubbleSort = function(){

  title('bubbleSort');

  let message = 'Empty array should return an empty array';
  testing.assertArray([], bubbleSort([]), message );

  message = 'Array consists of one element should return an array with that element';
  testing.assertArray([1], bubbleSort([1]), message );

  message = 'Array with multiple positive numbers should return descending ordered array.';
  testing.assertArray([9, 8, 3, 1], bubbleSort([8, 1, 3, 9]), message);

  message = 'Array including positive and negetive numbers should return descending ordered array.';
  testing.assertArray([9, 8, 3, 1], bubbleSort([8, 1, 3, 9]), message);

  message = 'Array including multiple occourance of a number should return descending ordered array.';
  testing.assertArray([9, 8, 3, 1], bubbleSort([8, 1, 3, 9]), message);

}

const test = function(){
  testBubbleSort();
  displaySummary();  
}

test();
