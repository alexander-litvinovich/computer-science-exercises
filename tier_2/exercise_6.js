/*

    После просмотра мультика «Подарок для самого слабого», Роберт пустил скупую мужскую слезу 
    и решил закинуть зайцам ящик с едой с помощью квадрокоптера. 
    Лес, где бегают зайцы, представлен многоульником (не обязательно выпуклым). 
    Роберт наугад вбивает координаты точки сброса ящика в квадрокоптер 
    (которые точно не лежат на границе леса), и пока он не запустил всю эту махину 
    наверх, надо понять, попадет ли ящик в лес (а не в поле вокруг).

    Входные данные
    Первая строка содержит число вершин многоугольника, описывающего лес N 
    (3 \leqslant N \leqslant 100)N(3⩽N⩽100). 
    
    Следующие N строк содержат пару вещественных чисел, задающих вершины многоугольника. 
    
    Следующая строка содержит пару координат, которые Роберт вбил в квадрокоптер.

    Результат работы
    Выведите «YES», если координаты в квадрокоптере попадут в лес и «NO», если иначе.

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arg = {
 vertexCount : null,
 vertexes : [],
 point: null
};

rl.on('line', (input)=>{
    if(!arg.vertexCount) {
        arg.vertexCount = parseInt(input.trim());
    } else if(arg.vertexes.length<arg.vertexCount){
        let v = input.trim().split(/\s/).map((num)=>parseFloat(num));
        arg.vertexes.push({X:v[0], Y:v[1]});
    } else if(!arg.point){
        let v = input.trim().split(/\s/).map((num)=>parseFloat(num));
        arg.point = {X:v[0], Y:v[1]};
        rl.close();
    }
});


function isInPoly(vertexList, point){
    prev = vertexList.length - 1;
    let inside = false;
    
    for (i = 0; i < vertexList.length; i++){
        if (
            (
                ((vertexList[i].Y <= point.Y) && (point.Y < vertexList[prev].Y)) || 
                ((vertexList[prev].Y <= point.Y) && (point.Y < vertexList[i].Y))
                ) &&
                (point.X > (vertexList[prev].X - vertexList[i].X) * (point.Y - vertexList[i].Y) / (vertexList[prev].Y - vertexList[i].Y) + vertexList[i].X)
                
        ) inside = !inside;
        prev = i;
    }
    return inside;
}
        
const main = function(){
    console.log(isInPoly(arg.vertexes, arg.point)?"YES":"NO");
    process.exit(0);   
}

rl.on('close', main);