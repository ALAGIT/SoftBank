import * as readline from 'readline';
import { findAccount } from './findAccount';
import { findBalances } from './findBalances';

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Input instuction: ', input => {

var list = new findAccount();
var list2 = new findBalances();
if (input.substring(0,4) == "List") {
    if (input.substring(5,8) == "All") {
        list2.findBalances();
    }
    else {
        list.findAccount(input.substring(5));
    }
}
else {
    console.log(input.substring(0,4));
}

rl.close();
process.exit();
});
