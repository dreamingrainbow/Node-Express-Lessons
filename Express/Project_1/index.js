const express = require('express');

server.route('/').get((req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});

const app = server.listen(PORT, () => {
    console.log(`You have reached : ${app.address().address}:${app.address().address}`);
});