/*
    После трудного задания Роберт решил отдохнуть и поиграть в корейскую головоломку Ольбарбуруненсунсер. 
    В журнале записана последовательность из знаков (, ) и ?, нужно заменить все знаки вопроса, 
    чтобы полученная последовательность оказалась правильной. 
    Роберт заметил, что не всякая последовательность имеет единственное решение и задумался, 
    а сколько же решений при данных начальных условиях возможно?

    Входные данные
    Первая и единственная строка содержит последовательность из символов (, ) и ? длинной до 100.

    Результат работы
    Выведите единственное число возможных решений головоломки.

    Решение:
    Можно решить перебором — будем подставлять на место «?» скобки по очереди.
*/


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputString = null;
 
rl.on("line", (input)=>{
    if(!inputString) {
        inputString = input.trim().replace(/\s/g,'');
        rl.close();
    }
});

const checkSequence = function(s){
    let counter = 0;

    for(i=0;i<s.length;i++){
        if(s[i] === '(') counter ++;
        else counter--;
        if(counter<0) return false;
    }
    return counter == 0;
}

const generateSubstitutes = function(number, len){
    let part2 = number.toString(2).replace(/0/g,'(').replace(/1/g,')').split('');
    let part1 = new Array(len-part2.length).fill('(');
    return [...part1, ...part2];
}

const main = function(){
    let quotationMarkCount = inputString.match(/[\?]/g).length;
    let variantsCount = Math.pow(2,quotationMarkCount);
    let correctSequences = [];

    for (let i=0;i<variantsCount;i++){
        let substitutes = generateSubstitutes(i, quotationMarkCount);
        let copyInputString = inputString;
        
        while(/[\?]/.test(copyInputString)){
            copyInputString = copyInputString.replace('?', substitutes.splice(0,1));
        }

        /* // Debug
        console.log(`${copyInputString} — ${checkSequence(copyInputString)}`);
         */
        if(checkSequence(copyInputString)==true) correctSequences.push(copyInputString);
    }
    
    /* // Debug
    for(seq of correctSequences){
        console.log(seq);
    } */
    
    console.log(correctSequences.length);
    process.exit(0);   
}

rl.on("close", main);