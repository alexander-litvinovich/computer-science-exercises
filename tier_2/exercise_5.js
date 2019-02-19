/*
    Роберт успешно справился с вылазкой в тыл врага и раздобыл одну полоску 
    из тетради в клетку длинной N клеток. 
    Кроме этого, в руки Роберта попал лист изменений этой полоски. 
    Враг выбирал две позиции i и j и записывал между ними новое сообщение. 
    При этом, если новое сообщение накладывалось на старое, то старое являлось навсегда утерянным. 
    Напишите программу, которая определит, сколько финальных не утерянных сообщений осталось на ленте.

    Входные данные
    Первая строка содержит длину клетчатой полоски N (1 \leqslant N \leqslant 10^9)N(1⩽N⩽10 
    9
    ). Вторая строка содержит количество пар в листе изменений M (0 \leqslant M \leqslant 1000)M(0⩽M⩽1000). 
    Следующие M строк содержат пары чисел i и j, задающих номера клеток начала и конца сообщения (1 \leqslant i \leqslant j \leqslant N)(1⩽i⩽j⩽N).
    
    Результат работы
    Выведите единственное число – количество не утерянных сообщений на ленте.

    Примеры
    Входные данные
    10
    3
    8 10
    2 9
    1 3
    Результат работы
    1
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arg = {
 bufferSize : null,
 messagesCount : null,
 pairs: []
};

rl.on('line', (input)=>{
    if(!arg.bufferSize) {
        arg.bufferSize = parseInt(input.trim());
    } else if(!arg.messagesCount){
        arg.messagesCount = parseInt(input.trim());
    } else {
        if(arg.pairs.length<arg.messagesCount) {
            arg.pairs.unshift(input.split(/\s/).map((number)=>parseInt(number)));
            if(arg.pairs.length===arg.messagesCount) rl.close();    
        }
    }
});


const main = function(){
    let validPair = [];
    let indicatorField = new Array(arg.bufferSize).fill(0);

    for (pair of arg.pairs) {
        if(indicatorField.slice(pair[0]-1,pair[1]).reduce((accum, cur)=>accum+cur) == 0){
            validPair.push(pair);
        }
        indicatorField.fill(1,pair[0]-1,pair[1]);
    }
    
    /* Debug
    for (const pair of validPair) {
        console.log(pair.join('-'));    
    }
    */

    console.log(validPair.length);
    process.exit(0);   
}

rl.on('close', main);
/*
test values:

12
4
11 12
2 9
8 10
1 3


12
3
1 6
1 6
1 6
*/