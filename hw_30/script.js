const button = document.querySelector('.button');
const field = document.querySelector('.field');
button.addEventListener('click', getNumbers);

function getNumbers(key, value) {
    let number = prompt('Введите, пожалуйста, число');
    console.log(number);
    sessionStorage.setItem('number', number);
}
//
// let win = window.frames.test;
//
// win.postMessage("number", "http://localhost:4444/");

let x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.