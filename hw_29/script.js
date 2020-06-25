const form = document.querySelector('.form');
const keyName = 'savedCookie';
let objectData;

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.length) {
        recoverValue();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    objectData = Object.fromEntries(formData.entries());
    localStorage.setItem(keyName, JSON.stringify(objectData));
})

function recoverValue() {
    const objCookie = JSON.parse(localStorage.getItem(keyName))

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


