const button = document.querySelector('.button');
const wrap = document.querySelector('.button__wrap');
let iframe = document.getElementsByTagName('iframe')[0];
let number;

button.addEventListener('click', putNumberInFrame);

function putNumberInFrame() {
    number = prompt('Введите, пожалуйста, число');
    if (checkNumber(number.trim())) {
        let main = iframe.contentWindow.document.querySelector('.main');
        main.innerText = number;
        writeResult();
    } else {
        console.log('Неправильный ввод');
    }
}

function checkNumber(nbr) {
    if (nbr.length === 0 || isNaN(Number(nbr))) {
        return false;
    }
    return true;
}

function writeResult() {
    let res = document.createElement('div');
    res.innerText = +number + 1;
    wrap.appendChild(res);
}

window.onbeforeunload = function() {
    return false;
}