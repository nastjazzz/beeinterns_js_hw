const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './1.html'));
})

app.get('/2.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './2.html'));
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
})

app.listen(4444, () => console.log('app listen on port 4444'));