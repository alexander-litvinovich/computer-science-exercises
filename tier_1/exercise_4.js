/*
    4. Желтый квадрат 

    В таблице клетки раскрашены в желтый и черный цвет. 
    Нужно найти в ней прямоугольную область желтого цвета, 
    состоящую из наибольшего количества ячеек. 


    Входные данные: 
    Во входном файле записана сначала высота N, 
    а затем ширина M таблицы (1≤N≤5000, 1≤M≤5000), 
    а затем записано N строк по M чисел в каждой строке, 
    где 0 означает, что соответствующая клетка таблицы 
    выкрашена в желтый цвет, а 1 — что в черный. 


    Выходные данные: 
    В выходной файл вывести одно число — количество 
    клеток, содержащихся в наибольшем по площади 
    желтом прямоугольнике.

*/

inputTable =   `8 8
                1 1 1 1 1 1 1 1
                1 0 0 0 0 1 0 1
                1 0 0 0 0 1 1 1
                1 0 0 0 0 1 1 1
                1 1 1 1 1 1 1 1
                1 0 0 1 0 0 1 1
                1 1 1 1 0 0 1 1
                1 1 1 1 1 1 1 1`;

let table = inputTable.split('\n').map((line)=>{ 
    return line.trim().split(/\s*/).map((el)=>parseInt(el)); 
});




function printTable(table){
    let tableHeader = [' +'];
    for(row=0;row<table[0].length;row++)
        tableHeader.push(row)

    console.log(tableHeader.join('-'));

    for (const line in table) {
        console.log([line+'|', ...table[line]].join(' '));
    }
}

function measureSquare(y, x, table, seen){
    let result = 0;
    for(let _y=y; _y<table.length && table[_y][x]===0; _y++){
        for(let _x=x; _x<table[_y].length && table[_y][_x]===0; _x++){
            seen[_y][_x] = true;
            result++;
        }
    }
    return result;
}

function searchRect(table){
    let seen = [];
    for(let y = 0; y < table.length; y++){
        seen[y] = [];      
        for(let x = 0; x < table.length; x++){
            seen[y][x] = false;
        }
    }
    
    let squares = [];
   
    for(let y = 0; y < table.length; y++){      
        for(let x = 0; x < table.length; x++){
            if (table[y][x] === 0 && seen[y][x] === false) 
            squares.push(measureSquare(y, x, table, seen));
        }
    }
    printTable(seen); 
    
    return squares;
}

const {height, width} = table.splice(0, 1);

//printTable(table);

console.log(Math.max(...searchRect(table)));