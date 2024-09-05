```markdown
Даша умеет складывать большие числа, но делает это не всегда точно.

Напишите функицю которая принимает на вход три числа:
- первое слогаемое
- второе слогаемое
- Дашин результат сложения

Функция должна вернуть массив номеров позиций в числе, в котором 
допущена ошибка

например:
107
207
313 — Дашин ответ

Вывод: [1]

Если ответ правильный вывести строку "ok"
```

2 задание

Формат ответов: натуральное число или несократимая дробь вида:

p/q

Сколько существует счастливых билетиков, у которых сумма цифр на

нечётных местах ﻿11, а на чётных ﻿7﻿? Номер билетика состоит из 6 цифр.

```jsx
const zeroPad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

let happyNums = 0;
let specialHappy = 0;
let lastSpH = "";

for (i=0;i<=999999;i++) {
	let nums = zeroPad(i, 6).split("").map((n)=>+n);
  
  if(nums[0]+nums[1]+nums[2] == nums[3]+nums[4]+nums[5]) {
  	happyNums++;
      if(nums[0]+nums[2]+nums[4] == 7 && nums[1]+nums[3]+nums[5] == 11) {
      	specialHappy++;
        lastSpH = nums.join("");
      }
  }
}

console.log("Happy "+happyNums, "Sp Happy "+specialHappy, "Last: "+lastSpH);

//Happy 55252 Sp Happy 276 Last: 720900
```
