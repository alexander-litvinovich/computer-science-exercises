const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arg = {
 a : null,
 b : null,
};

rl.on('line', (input)=>{
    if(!arg.a) {
        arg.a = parseInt(input.trim());
    } else if(!arg.b){
        arg.b = parseInt(input.trim());
        rl.close();
    }
});

const main = function(){
    rl.write(`${arg.a+arg.b}`);
    process.exit(0);   
}

rl.on('close', main);