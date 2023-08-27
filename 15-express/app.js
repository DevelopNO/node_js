const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

app.get('/', (req, res) => {
    console.log("request /");
    res.send('Hello World!');
});

app.get('/moshe', (req, res) => {
    console.log("request /moshe");
    res.send('Hello Moshe!');
});

app.get('/Eden', (req, res) => {
    console.log("request /eden");
    res.send('Hello Eden!');
});