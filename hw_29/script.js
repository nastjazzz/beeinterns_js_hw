const form = document.querySelector('.form');
const keyName = 'savedCookie'; //key LocalStorage
const cookieName = 'cookie'; //name cookie
let valueCookie; //значение куки

checkPrevValues();

function checkPrevValues() {
    if (checkCookieName(cookieName)) {
        console.log('восстанавливаю из куки');
        recoverValue();
    } else if (localStorage.length) {
        console.log('восстанавливаю из localStorage');
        recoverValue();
    } else {
        console.log('нечего восстанавливать');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let objectData = Object.fromEntries(formData.entries());

// ДЛЯ ПРОВЕРКИ РАБОТОСПОСОБНОСТИ СОХРАНЕНИЯ/ВОССТАНОВЛЕНИЯ ИН-ЦИИ Я КОММИТИЛА ЛИБО 1Й, ЛИБО 2Й ВАРИАНТ
// ЕСЛИ ОБА ВАРИАНТА РАСКОММИЧЕНЫ, ТО БУДУТ РАБОТАТЬ ОБА, НО ВОССТАНОВЛЕНИЕ ПОЙДЕТ ИЗ КУКИ

// 1) СОХРАНЕНИЕ ИН-ЦИИ В КУКИ
    // const str = JSON.stringify(objectData);
    // document.cookie = `${cookieName}=${str}`;

// 2) СОХРАНЕНИЕ ИН-ЦИИ В LOCALSTORAGE
    localStorage.setItem(keyName, JSON.stringify(objectData));
})


function checkCookieName(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        valueCookie = match[2];
        return true;
    } else {
        return false;
    }
}

function recoverValue() {
    let objCookie = checkCookieName(cookieName) ? JSON.parse(valueCookie) : JSON.parse(localStorage.getItem(keyName));

    if (objCookie !== null) {
        for (let i = 0; i < 6; i++) {
            if (objCookie[form[i].name] && form[i].type !== 'checkbox') {
                form[i].value = objCookie[form[i].name];
            } else if (objCookie[form[i].name] && form[i].type === 'checkbox') {
                form[i].checked = true;
            } else {
                console.log('нет значения');
            }
        }
    }
}
