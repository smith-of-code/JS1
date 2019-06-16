//задание 1
let celcium = +prompt(`задайте температуру в градусах по цельсию`);

if (isNaN(celcium)){
    console.log('Вы ввели не число')
}else{
    console.log(celcium + ' градусов цельсия ' + ' = ' + ((9 / 5) * celcium + 32) + ' градусов по фаренгейту' )
}

//задание 2
let admin;
let name;

name = 'Василий';
admin = name;

console.log(admin);

//задание 3
console.log('выражение 1000 + "108" будет равно ' + (1000 + '108'));


