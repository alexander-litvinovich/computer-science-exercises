/**
    1. Фруктовый ларек

    Торговый центр установил автомат по продаже яблок, апельсинов и бананов, 
    чтобы во время покупок люди могли перекусить здоровой пищей. 
    Стоимость любого фрукта в автомате равна пяти рублям. 
    Автоматы принимают монеты по 5 и 10 рублей и купюры в 10, 50 и 100 рублей. 
    Когда человек бросил в автомат десятирублёвую монету или 10-, 50- или 100- рублёвую купюру, 
    автомат выдаёт сдачу пятирублёвыми монетами. 
    Если же человек бросил в автомат пятирублёвую монету, то автомат её сохраняет 
    и использует для сдачи следующим покупателям. Ясно, что для выдачи сдачи всем покупателям, 
    может потребоваться изначально загрузить в автомат некоторое количество пятирублёвых монет. 
    
    Сейчас в торговом центре проходят испытания с целью определить минимальное количество монет, 
    которые надо загрузить в автомат утром. Вам дан протокол одного из таких испытаний: 
    известен порядок, в котором покупатели оплачивали фрукты различными монетами и купюрами. 
    Определите, какое минимальное количество пятирублёвых монет должно было изначально находиться 
    в автомате, чтобы всем покупателям хватило сдачи.

    Входные данные:
    В первой строке входного файла находится одно натуральное число N — количество покупок в автомате, 
    которые были совершены в ходе испытания (1 ≤ N ≤ 50000). 
    Во второй строке находятся N натуральных чисел, каждое из которых равно номиналу монеты или купюры, 
    которую использовал очередной покупатель для оплаты; 
    каждый номинал может принимать одно из четырёх значений: 5, 10, 50 или 100.

    Выходные данные:
    В выходной файл выведите одно число — минимальное количество пятирублёвых монет, 
    которые надо было загрузить в автомат изначально, чтобы всем покупателям хватило сдачи.

    — Хватило сдачи в этом конкретном испытании
    
 */

const readline = require('readline');

const COST = 5;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputArgs = {
    a : null,
    b : null,
};

rl.on('line', (input)=>{
    if(!inputArgs.a) {
        inputArgs.a = input.trim();
    } else if(!inputArgs.b){
        inputArgs.b = input.trim();
        rl.close();
    }
});

main = function(){
    
    let purchasesCount = parseInt(inputArgs.a);
    let purchases = inputArgs.b.split(' ').map((item)=>parseInt(item));
    let change = 0;

    /* Chef's compliment 👌 */
    if(purchasesCount != purchases.length)
        console.log('Purchases count and length of dataset are not equal. May be mistake in the input data.');
    
    for (const purchase of purchases) {
        let changeForPurchase = (purchase-COST)/5;
        change += changeForPurchase;
    }
    console.log(change);
}

rl.on('close', main);

/*
    Решение:
    В автомате не может быть отрицательного количества монет, поэтому изначально 
    в нем должно быть столько, чтобы в процессе минимальным количеством был 0 
    (иначе можно 1 монету выкинуть). 
    
    Воспроизведем процесс покупки и будем поддерживать число монет в автомате, 
    ответом будет -min, где min — минимальное число монет за все время работы автомата.
*/