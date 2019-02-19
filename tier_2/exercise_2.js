/*
    Роберт продолжает осваивать навыки агента и на этот раз дешифрует послания. 
    Первый этап состоит в поиске буквы, которая встречается в закодированной строке 
    больше одного раза (и хотя бы одна точно существует). 
    Следующие этапы он раскрыть не может (это же тайна), поэтому просит помочь с первым.

    Входные данные
    Первая и единственная строка содержит набор латинских букв в нижнем регистре, 
    длинной от 22 до 10001000 символов.

    Результат работы
    Выведите в одну строку все буквы без пробелов, которые встречаются 
    в исходной строке больше одного раза, порядок не важен.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputString = "";

rl.on('line', (input)=>{
    if(!inputString) {
        inputString = input.trim();
        rl.close();
    }
});


const main = function(){
    let output = {};
    let result = '';

    for(letter of inputString){
        if(!output[letter]) {
            output[letter] = 1
        } else {
            output[letter]++
        }
    }

    Object.keys(output).map((letter)=>{
        if(output[letter]>1) result+=letter;
    })

    console.log(result);
    process.exit(0);   
}

rl.on('close', main);