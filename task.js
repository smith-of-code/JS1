// 1 задание

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 //сначала увеличивает, потом возвращает(префикс)
// d = b++; alert(d);           // 1 //сначала возвращает, потом увеличивает(постфикс)
// c = (2+ ++a); alert(c);      // 5 //2 + 3  сначала увеличивает, потом возвращает(префикс)
// d = (2+ b++); alert(d);      // 4 //2 + 2  сначала возвращает, потом увеличивает(постфикс)
// alert(a);                    // 3 // инкремент в середине кода отрабатывает как a = a + 1, то есть присваивает новое значение переменной.
// alert(b);                    // 3 // инкремент в середине кода отрабатывает как b = b + 1, то есть присваивает новое значение переменной.
//Даже в случае с постфиксной записью, значение переменной b уже было изменено

// 2 задание
//     Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// x === 5

// 3 задание
let first = +prompt('Введите первое число');
let second = +prompt('Введите второе число');
calculate(first, second);

function calculate(num1, num2) {
    if (!num1 || !num2){
        console.log(`ВВОДИТЬ НУЖНО ЧИСЛО!!!`);
    }else if (num1 > 0 && num2 > 0){
        console.log(num1 - num2);
    }else if (num1 < 0 && num2 < 0){
        console.log(num1 * num2);
    }else {
        console.log(num1 + num2);
    }

}


// 4. задание

let a = +prompt('Введите число от 0 до 15');

switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
}

// 5. задание

function sum(num1, num2) {
    return num1 + num2;
}
function deduct(num1, num2) {
    return num1 - num2;
}
function multiplic(num1, num2) {
    return num1 * num2;
}
function split(num1, num2) {
    if (num2 === 0){
        return console.log('На ноль делить нельзя!!!!')
    }
    return num1 / num2;
}


// // 6. задание

function mathOperation(arg1, arg2, operation){
    if (!arg1 || !arg2 || !operation){
        return console.log('Была введена буква');
    } else if (operation < 1 || operation > 4){
        return console.log('Операции с таким номером нет!')
    }
    if (operation === 1){
        return sum(arg1, arg2);
    } else if (operation === 2){
        return deduct(arg1, arg2);
    } else if (operation === 3 ){
        return multiplic(arg1, arg2);
    } else if (operation === 4){
        return split(arg1, arg2);
    }
}
let x = +prompt('Введите первое число');
let y = +prompt('Введите второе число');
let z = +prompt('Что нужно выполнить? \n1 - сложить  \n2-вычесть\n3-умножить\n4-разделить');

console.log(mathOperation(x,y,z));

// 7 задание

//null > 0 //false, по алгоритму ECMA  null преобразуется к +0, +0 и 0  равны
//null < 0 //false, по алгоритму ECMA  null преобразуется к +0, +0 и 0  равны
//null == 0 //false  по алгоритму ECMA не подходит не одно условия кроме последнего которое возвращает false по умолчанию
//null <= 0 //true если null не  больше 0 и не равен 0, то значит он меньше или равен 0. ЛОГИЧНО
//null >= 0 //true если null не  меньше 0 и не равен 0, то значит он больше или равен 0. ЛОГИЧНО

// 8. задание
function power(val, pow){
if (pow !== 1){
   return val * power(val, pow - 1);
}
return val
}

console.log(power(2, 4));