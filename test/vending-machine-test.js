const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");


testing.assertTest(50, vendingMachine.howManyCoins(50), 'testing test framework','testing for even coins.');
testing.assertTest(3, vendingMachine.howManyCoins(3), 'testing test framework','testing for odd coins.');
console.log(testing.groupLogByKey('result'));

