const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, './style.css'));
})

app.listen(7777, () => console.log("app listen on port 7777"));