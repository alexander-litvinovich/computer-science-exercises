/*
    2. Помочь Игорю 

    Игорь из 5Б играет с одноклассниками: они передают ему бумажку, 
    на которой записано выражение вида:
    
        Q1d1Q2d2...Qn
        , где Qi — число, а dj — знак +, - или *.

    Игорь должен вычислить значение выражения, согласно правилам арифметики,
    и просит написать ему программу для вычислений. 


    Входные данные: 
    На вход программе подается строка указанного вида, состоящая не более чем из 9 чисел, 
    разделенных символами арифметических операций. 


    Выходные данные: 
    Выведите значение арифметического выражения. 
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

evaluteByHands = function(expression){
    let operator = expression.match(/([\*/+-])/g).pop(); // using last operator because double operators not allowed
    let operatorPos = expression.match(/-?\d+(\.\d+)?([\*/+-])/)[0].length-1;
    
    let a = parseFloat(expression.substring(0,operatorPos));
    let b = parseFloat(expression.substring(operatorPos+1));
    
    let result = 0;
    
    switch (operator) {
        case '+':
        result = a + b;
        break;
        
        case '-':
        result = a - b;
        break;
        
        case '*':
        result = a * b;
        break;
        
        case '/':
        result = a / b;
        break;    
        
        default:
        return false
        break;
    }
    return result;
}

manualEvalute = function(inputString){
    let expression = inputString.replace(/\s/g,"");
    
    while (/-?\d+(\.\d+)?[/\*]\d+(\.\d+)?/.test(expression)) // handling multiplications and divisions
        expression = expression.replace(/-?\d+(\.\d+)?[/\*]\d+(\.\d+)?/, (str)=>evaluteByHands(str));
    
    while (/-?\d+(\.\d+)?[-\+]\d+(\.\d+)?/.test(expression)) // handling summs and substractions
        expression = expression.replace(/-?\d+(\.\d+)?[-\+]\d+(\.\d+)?/, (str)=>evaluteByHands(str));
    
    return parseFloat(expression);
}

let inputString;

rl.on('line', (input)=>{
    if(!inputString) {
        inputString = input;
        rl.close();
    }
});

const main = function(){
    /* Most easy way */
    console.log(`With eval: ${eval(inputString).toFixed(1)}`);
    console.log(`Manual:    ${manualEvalute(inputString).toFixed(1)}`);
    process.exit(0);   
}

rl.on('close', main);

/* Parsing

1.  12 - 2 * 6 + 3.5 / 0.5
first of al multiplication and division
2.  12 - 12 + 7

*/