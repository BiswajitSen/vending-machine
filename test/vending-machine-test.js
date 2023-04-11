const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");


testing.assertTest(1, vendingMachine.dummy(), 'testing test framework','passing testFrameWork');
testing.assertTest(0, vendingMachine.dummy(), 'testing test framework','failing testFrameWork');
console.log(testing.groupLogByKey('result'));

