const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");


testing.assertTest(1, vendingMachine.getCoinsCount(2, [1]), '','for rs. 2 should be 1 coin');
testing.assertTest(2, vendingMachine.getCoinsCount(3, [1, 2]),'','for rs. 3 should be 2 coins');
testing.assertTest(1, vendingMachine.getCoinsCount(5, [1, 2, 5]), '','for rs. 5 should be 1 coins');
testing.assertTest(2, vendingMachine.getCoinsCount(7, [1, 2, 5]), '','for rs. 7 should be 2 coins');
testing.assertTest(2, vendingMachine.getCoinsCount(20, [1, 2, 5, 10]), '','for rs. 20 should be 2 coins');
console.log(testing.groupLogByKey('result'));

