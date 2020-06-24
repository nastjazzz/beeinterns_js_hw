const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
});

app.get('/serviceavailable/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response.json'))
})

app.get('/getinfo/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response2.json'));
});

app.get('/getdescription/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response3.json'));
});

app.post('/request/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response.json'));
});

app.use(function(req, res) {
    res.status(404).send({ "isSucceeded": false });
});


app.listen(9876, () => console.log('app listening on port 9876'));