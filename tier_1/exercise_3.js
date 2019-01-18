/*
    3. Слон и ладья 

    На шахматной доске расположены несколько черных слонов и ладей.
    Нужно определить, на сколько клеток доски можно поставить белую пешку, 
    чтобы она не находилась под боем черных фигур. 

    Входные данные: 
    На вход подается таблица 8 на 8, символ B (заглавная латинская буква) 
    означает, что в клетке стоит слон, символ R — ладья, 
    символ * — что клетка пуста. 

    Выходные данные: 
    Выведите количество клеток, на которую можно поставить белую пешку, 
    чтобы она не находилась под боем черных фигур.
*/

inputTable =   `* * * * * * * *
                * * * * * * * *
                * * B * * R * *
                * * * * * * * *
                * * * B * * * *
                * * * * R * * *
                * * * * * * * *
                * * * * * * * *`;
               

let table = inputTable.split('\n').map((line)=>{ 
    return line.trim().split(/\s*/) 
});

function findAttackZone(board){
    for(let y = 0; y < 8; y++){      
        for(let x = 0; x < 8; x++){
            if (board[y][x] === 'R'){
                for(let i = y-1; (i >= 0 && board[i][x] !=='R' && board[i][x]!=='B'); i--) board[i][x] = "x";
                for(let i = y+1; (i < board.length && board[i][x] !=='R' && board[i][x]!=='B'); i++) board[i][x] = "x";

                for(let i = x-1; (i >= 0 && board[y][i] !=='R' && board[y][i]!=='B'); i--) board[y][i] = "x";
                for(let i = x+1; (i < board[y].length && board[y][i] !=='R' && board[y][i]!=='B'); i++) board[y][i] = "x";                
            }

            if (board[y][x] === 'B'){
                for(let i = 1; (y-i >= 0 && x-i >= 0 && board[y-i][x-i] !=='R' && board[y-i][x-i]!=='B'); i++) board[y-i][x-i] = "x";
                for(let i = 1; ((y+i < board.length && x+i < board[y].length) && board[y+i][x+i] !=='R' && board[y+i][x+i]!=='B'); i++) board[y+i][x+i] = "x";
                
                for(let i = 1; (y-i >= 0 && x+i < board[y].length && board[y-i][x+i] !=='R' && board[y-i][x+i]!=='B'); i++) board[y-i][x+i] = "x";
                for(let i = 1; (y+i < board.length && x-i >= 0 && board[y+i][x-i] !=='R' && board[y+i][x-i]!=='B'); i++) board[y+i][x-i] = "x";
            }
        }    
    }
}

function countSafeSquare(board){
    result = 0;
    for(let y = 0; y < board.length; y++){      
        for(let x = 0; x < board.length; x++){
            if (board[y][x] === '*') result++;
        }
    }
    return result;
}

findAttackZone(table);

function showBoard(board){
    let boardHeader = [' '];
    for(row=0;row<board[0].length;row++)
        boardHeader.push(String.fromCharCode(97 + row))

    console.log(boardHeader.join(' '));

    for (const line in board) {
        console.log([board.length-line, ...board[line]].join(' '));
    }
}

//showBoard(table); — uncomment to see the board
console.log(countSafeSquare(table));