"use strict";
var readline = require('readline');
var findAccount_1 = require('./findAccount');
var findBalances_1 = require('./findBalances');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Input instuction: ', function (input) {
    var list = new findAccount_1.findAccount();
    var list2 = new findBalances_1.findBalances();
    if (input.substring(0, 4) == "List") {
        if (input.substring(5, 8) == "All") {
            list2.findBalances();
        }
        else {
            list.findAccount(input.substring(5));
        }
    }
    else {
        console.log(input.substring(0, 4));
    }
    rl.close();
    process.exit();
});
//# sourceMappingURL=app.js.map