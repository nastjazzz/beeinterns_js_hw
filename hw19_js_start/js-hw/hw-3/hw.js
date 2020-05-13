/*
    Данный код выводит неверное сообщение о возрасте
    исправьте ошибку и так же перепишите код
    используя новый синтаксис
    используя подходящие оператоы
    следуя рекомендациям по именованию переменных
*/

// var age = 20;
// var text = 'Ваш возраст: ' + age + ' лет';
// alert(text); // Должен вывести: Ваш возраст: 20 лет

let age = 20;
let text = `Ваш возраст: ${age} лет`;
alert(text);

// var hours = 12;
// var minutes = 45;
// hours = hours + 1;
// var textwithtime = 'Текущее время: ' + hours + ':' + minutes;
//
// alert(textwithtime); // Должен вывести: Текущее время: 13:45

let hours = 12;
let minutes = 45;
hours += 1;
let textWithTime = `Текушее время: ${hours}:${minutes}`;
alert(textWithTime);