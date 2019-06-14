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

//6. Камень ножницы бумага
function cueva(){
    let values = ['камень','ножницы','бумага'];
    let skyNetCount = 0;
    let userCount = 0;
    while (true){
        let skyNet = values[Math.floor(Math.random()*2)];
        let user = values[+prompt('Выберете:\n 1 - камень \n 2 - ножницы \n 3 - бумага') - 1];
        if (!user){
            alert(`Внимательнее!!!`);
            continue
        }
        if (skyNet.indexOf(user)=== 0){
            alert(`
                СкайНет(${skyNet})
                Пользователь(${user})
                счет:
                СкайНет(${skyNetCount})
                Пользователь(${userCount})
                `);
        }else {
            if (skyNet === 'камень' && user === 'ножницы' || skyNet === 'ножницы' && user === 'бумага' || skyNet === 'бумага' && user === 'камень'){
                ++skyNetCount;
                alert(`
                СкайНет(${skyNet})
                Пользователь(${user})
                счет:
                СкайНет(${skyNetCount})
                Пользователь(${userCount})
                `);
            }else {
                ++userCount;
                alert(`
                СкайНет(${skyNet})
                Пользователь(${user})
                счет:
                СкайНет(${skyNetCount})
                Пользователь(${userCount})
                `);

            }
        }
        if (skyNetCount === 3 || userCount === 3){

            if (skyNetCount > userCount){
                alert(`Победил СкайНет`);
                break
            } else {
                alert(`Победил Пользователь`);
                break
            }

        }
    }
}

cueva();



// 7. Шар Предсказаний

function answerBall(){
    let answers = [
        'Бесспорно',
        'Предрешено',
        'Никаких сомнений',
        'Определённо да',
        'Можешь быть уверен в этом',
        'Мне кажется — «да»',
        'Вероятнее всего',
        'Хорошие перспективы',
        'Знаки говорят — «да»',
        'Да',
        'Пока не ясно, попробуй снова',
        'Спроси позже',
        'Лучше не рассказывать',
        'Сейчас нельзя предсказать',
        'Сконцентрируйся и спроси опять',
        'Даже не думай',
        'Мой ответ — «нет»',
        'По моим данным — «нет»',
        'Перспективы не очень хорошие',
        'Весьма сомнительно'];
    return answers[Math.floor(Math.random()*answers.length - 1)];
}
console.log(answerBall());
