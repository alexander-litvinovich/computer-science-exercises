/*
    Роберт начал работать тайным агентом и теперь встреча с куратором начинается 
    со стандартной процедуры подтверждения личности. 
    Куратор называет любое натуральное число XX, а Роберт должен ответить, 
    сколько существует чисел-палиндромов \leqslant X⩽X. 
    Помогите Роберту написать программу, которая сможет дать ответ на такие запросы.

    Входные данные
    Первая и единственная строка содержит число XX (1 \leqslant X \leqslant100 000)(1⩽X⩽100000)

    Результат работы
    Выведите ответ для задачи.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number = null;

rl.on("line", (input)=>{
    if(!number) {
        number = parseInt(input.trim());
        rl.close();
    }
});

const main = function(){
    let result = 0;
    for(let i = 1; i<=number ; i++) {
        if(i.toString() === i.toString().split("").reverse().join("")) result++;
    }
    console.log(result);
    process.exit(0);   
}

rl.on("close", main);