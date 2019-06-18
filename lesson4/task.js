// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
//
//
// 2. *Сделать "игру" - Кто хочет стать миллионером. На базе объектов.


//задание 1

//Вариант 1
function transform1(number) {
    var objNum = {
        'сотни':0,
        'десятки':0,
        'единицы':0
    };
    var divider = 100;
    for (var key in objNum){
        objNum[key] = Math.floor(number / divider);
        number -= objNum[key] * divider;
        divider /= 10;

    }
    return objNum

}

//Вариант 2
function transform2(number){
    var objNum = {
        'единицы':0,
        'десятки':0,
        'сотни':0
    };
    number += '';
    let i = number.length - 1;
    for (var key in objNum){
        objNum[key] = number[i];
        --i
    }
    return objNum;
}


console.log(transform2(+prompt(`Введите число от 0 до 999`)));