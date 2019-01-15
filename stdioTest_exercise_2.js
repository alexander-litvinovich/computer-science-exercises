/**
 *  Environment setup for reading STDIN
 *  and writing to STDOUT (via console.log, 
 *  seems to be it matters for fintech.tinkoff.ru)
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const maxInputValues = 40;
const inputArray = [];


rl.on('line', (input)=>{
    if(!isNaN(parseInt(input))) inputArray.push(parseInt(input));
    if(inputArray.length == maxInputValues || !input) rl.close();
});

const main = function(){
    let result = 0;
    inputArray.map((num)=>{result+=num});
    console.log(result);
    process.exit(0);   
}

rl.on('close', main);