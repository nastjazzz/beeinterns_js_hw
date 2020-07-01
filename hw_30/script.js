const button = document.querySelector('.button');
const wrap = document.querySelector('.button__wrap');
let iframe = document.getElementsByTagName('iframe')[0];
let number;

button.addEventListener('click', putNumberInFrame);

function putNumberInFrame() {
    number = prompt('Введите, пожалуйста, число');
    let main = iframe.contentWindow.document.querySelector('.main');
    main.innerText = number;
    writeResult();
}

function writeResult() {
    let res = document.createElement('div');
    res.innerText = Number(number) + 1;
    wrap.appendChild(res);
}

window.onbeforeunload = function() {
    return false;
}