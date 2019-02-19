/*
    Роберт получил в наследство робота-дровосека, который умеет выполнять две операции: 
    добавь 3, увеличь в 4 раза. 
    Выполняя первую команду, робот колет +3 полена дров, 
    выполняя вторую, увеличивает общее количество дров в 4 раза. 
    Роберт хочет понять, за какое минимальное количество операций робот может получить 
    количество дров X, если изначальное число дров Y.

    Входные данные
    Первая и единственная строка содержит 1 <= X <= Y <= 100
    Результат работы
    Выведите единственное число – минимальное количество операций для получения из X дров Y дров. Если это невозможно, выведите -1.

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputString = null;

rl.on("line", (input)=>{
    if(!inputString) {
        inputString = input.trim();
        rl.close();
    }
});

const isInteger = (num) => {
    return (num ^ 0) === num;
}

const main = function(){
    let result = 0;
    let [bef, aft] = inputString.split(/\s/).map((num)=>parseFloat(num).toFixed(2));

    let repeat = true;

    while(aft>bef && repeat){   
        if(aft/4 >= bef && isInteger(aft/4)){
            aft = aft / 4;
            result ++;
            /* console.log(aft+' mult 4'); debug mutiplication */
        } else if(aft-3 >= bef){
            aft -= 3.0;
            result++;
            /* console.log(aft+' add 3'); debug summ*/
        } else repeat = false;
    }
    
    if(aft != bef) result = -1;

    console.log(result);
    process.exit(0);   
}

rl.on("close", main);