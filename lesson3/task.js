// 1 задание
let arr = [];
let i = 1;
while (i !== 100){//перебор чисел от 1 до 100
    let j = i ;
    let count = 0 ; //колличество делений без остатка
    while (j > 0) { //перебор чисел от i до 1
        if (i % j === 0){
            ++count;
        }
        --j;
    }
    if (count >= 3){
        ++i;
        continue
    }
    arr.push(i);
    ++i
}
console.log(arr);


// 2 и 3 задание
let cart = [
    ['boots',100],
    ['t-shirt',50],
    ['cap',20],
    ['trousers',50],
    ['gloves',10],
];

function countCartPrice(cartArray) {
    let cartSumm = 0;
    for (let i = 0;i<cartArray.length;i++){
        cartSumm += cartArray[i][1];
    }
    return cartSumm;
}


// 4 задание
for (var y = 0;y <= 9;console.log(y),y++ ){}

// 5 задание

for (var p = ''; p.length<=20; p += 'x'){
    console.log(p);
}
