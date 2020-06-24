const main = document.querySelector('.main');

const startHW = () => {
    axios.get('/serviceavailable/')
        .then(() => parallelQuery())

        .catch(() => writeError())
}

const parallelQuery = async () => {
    const results = await Promise.allSettled([
        axios.get('/getdescription/'),
        axios.get('/getinfo/'),
    ])

    let counter = 0;

    for (let i = 0; i < results.length; i++) {
        if (results[i].status === "fulfilled") {
            let text = document.createElement('div');
            text.innerText = results[i].value.data.text;
            main.appendChild(text);
        } else {
            counter++;
        }
    }

    if (counter === 2) {
        let message = document.createElement('div');
        message.innerText = 'Server error';
        main.appendChild(message);
    }
};

function writeError() {
    let error = document.createElement('div');
    error.innerText = 'Произошла ошибка';
    main.appendChild(error);
}