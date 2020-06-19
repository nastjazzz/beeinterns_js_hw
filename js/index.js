const textarea = document.querySelector('.message-text');
const sendButton = document.querySelector('.send-button');
const display = document.querySelector('.chat-bot__display');
const imageButton = document.querySelector('.img');
const button = document.querySelector('.send-button');
const dots = document.querySelectorAll('.dot');

let userMessage;
let botAnswer;
let numbers;
let start = false;

textarea.addEventListener('input', changeColorButton);
textarea.addEventListener('focus', startAnimationDots);
textarea.addEventListener('blur', stopAnimationDots);
sendButton.addEventListener('click', sendMessage);

// ФУНКЦИЯ, МЕНЯЮЩАЯ ЦВЕТ КНОПКИ
function changeColorButton() {
	textarea.value.length ? imageButton.src = "img/orange-btn.svg" : imageButton.src = "img/grey-btn.svg";
}

// НАЧАЛО АНИМАЦИИ
function startAnimationDots() {
	dots.forEach(function(item, i, dots) {
		item.classList.add('animated');
	})
}

// КОНЕЦ АНИМАЦИИ
function stopAnimationDots() {
	dots.forEach(function(item, i, dots) {
		item.classList.remove('animated');
	})
}

// ОТПРАВКА СООБЩЕНИЯ
function sendMessage() {
	if (textarea.value.length ) {
		createUserMessage();
		checkUserMessage();
	} else {
		console.log('не буду отправлять сообщение');
	}
}

// СОЗДАНИЕ СООБЩЕНИЯ ОТ ПОЛЬЗОВАТЕЛЯ
function createUserMessage() {
	userMessage = document.createElement("div");
	userMessage.className = "message";
	userMessage.classList.add('user-text');
	userMessage.innerHTML = textarea.value;
	display.appendChild(userMessage);
}

// СОЗДАНИЕ СООБЩЕНИЯ ОТ БОТА
function createBotMessage() {
	botAnswer = document.createElement("div");
	botAnswer.className = "message";
	botAnswer.classList.add('bot-text');
	display.appendChild(botAnswer);
}

// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ, ДЛЯ ПОЛУЧЕНИЯ ИМЕНИ
function getName() {
	let str = userMessage.textContent;
	let arr = str.split(':');
	// console.log(arr);
	return arr[1];
}

// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ, ДЛЯ ПОЛУЧЕНИЯ ЧИСЕЛ
function getNumbers() {
	let str = userMessage.textContent;
	let arr = str.split(':');
	numbers = arr[1].split(',');
	return numbers;
}

//ФУНКЦИЯ, ДЛЯ ВЫВЕДЕНИЯ ПОГОДЫ НА ЗАВТРА
function getTomorrowWeather() {
	let requestURL = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=bb47c094fa5841d1a18153252201606&q=moscow&tp=3l&lang=ru&format=json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	
	request.onload = function() {
		let weather = request.response;
		let maxTempC = weather.data.weather[1].maxtempC; //максимальная температура
		let minTempC = weather.data.weather[1].mintempC; //минимальная температура
		let date = (weather.data.weather[1].date).split("-").reverse().join("-"); // дата для проверки (в ответе от сервера выводилась в формате ГГГГ-ММ-ДД, я захотела ДД-ММ-ГГГГ)
		let weatherConditions = (weather.data.weather[1].hourly[5].lang_ru[0].value).toLowerCase(); //погодные условия
		createBotMessage();
		botAnswer.innerHTML = `Погода в Москве на ${date}: минимальная температура: ${minTempC}°C; максимальная температура: ${maxTempC}°C; ${weatherConditions}.`;
	}	
}

function startTalk() {
	if (/\/name:/i.test(userMessage.textContent)) {
		let name = getName();
		createBotMessage();
		botAnswer.innerHTML = `Привет ${name}, приятно познакомится. Я умею считать, введи числа, которые надо посчитать`;
		textarea.value = "";
		changeColorButton();
	}	else if (/\/number:/i.test(userMessage.textContent)) {
		numbers = getNumbers();
		createBotMessage();
		botAnswer.innerHTML = " -, +, *, / ";
		textarea.value = "";
		changeColorButton();
	} else if (userMessage.textContent === '-') {
		createBotMessage();
		botAnswer.innerHTML = numbers[0] - numbers[1];
		textarea.value = "";
		changeColorButton();
	} else if (userMessage.textContent === '+') {
		createBotMessage();
		botAnswer.innerHTML = Number(numbers[0]) + Number(numbers[1]);
		textarea.value = "";
		changeColorButton();
	} else if (userMessage.textContent === '*') {
		createBotMessage();
		botAnswer.innerHTML = numbers[0] * numbers[1];
		textarea.value = "";
		changeColorButton();
	} else if (userMessage.textContent === '/') {
		createBotMessage();
		botAnswer.innerHTML = numbers[0] / numbers[1];
		textarea.value = "";
		changeColorButton();
	} else if (userMessage.textContent === '/stop') {
		createBotMessage();
		botAnswer.innerHTML = "Всего доброго, если хочешь поговорить пиши /start";
		textarea.value = "";
		start = false;
		changeColorButton();
	} else if (userMessage.textContent === '/weather') {
		getTomorrowWeather();
		textarea.value = "";
		changeColorButton();
	}	else {
		createBotMessage();
		botAnswer.innerHTML = "Я не понимаю, введите другую команду!";
		textarea.value = "";
		changeColorButton();
	}
}

// ОСНОВНАЯ ФУНКЦИЯ, ДЛЯ ПРОВЕРКИ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ
function checkUserMessage() {
	if (start) {
		startTalk();
	} else if (userMessage.textContent === "/start") {
		start = true;
		createBotMessage();
		botAnswer.innerHTML = "Привет, меня зовут Чат-бот, а как зовут тебя?";
		textarea.value = '';
		changeColorButton();
	} else {
		createBotMessage();
		botAnswer.innerHTML = "Введите команду /start, для начала общения";
		textarea.value = '';
		changeColorButton();
	}
}