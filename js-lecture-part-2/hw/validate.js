function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (!checkLogin(login)) {
        alert('Логин занят, придумайте другой логин!');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите ваше имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        if (gender === 'male') {
            alert (`Уважаемый ${firstName}, заявка создана!`);
        } else {
            alert (`Уважаемая ${firstName}, заявка создана!`);
            console.log(checkLogin(login));
        }
    }
}

function checkLogin(login) {
    const arrOfLogins = ['beeline', 'beeinterns', 'bee'];

    for (let i = 0; i < arrOfLogins.length; i++) {
        if (login === arrOfLogins[i]) {
            return 0;
        }
    } return 1;
}
