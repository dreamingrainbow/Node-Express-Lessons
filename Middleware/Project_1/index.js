/* Load our express module */
const express = require('express');
/* Load our body parser global module */
const bodyParser = require('body-parser');
/* Load our cors global module */
const cors = require('cors');
/* Next we tell our server to use the  */
server.use(bodyParser.json());

server.use(cors());

server.route('/').get((req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});

const app = server.listen(PORT, () => {
    console.log(`You have reached : ${app.address().address}:${app.address().address}`);
});