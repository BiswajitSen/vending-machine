const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");


testing.assertTest(1, vendingMachine.getCoinsCount(2), '','for rs. 2 should be 1 coin');
testing.assertTest(2, vendingMachine.getCoinsCount(3), '','for rs. 3 should be 2 coins');
console.log(testing.groupLogByKey('result'));

