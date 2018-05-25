const express = require('express');
const bodyParser = require('body-parser');
const fooMiddleware = require('foo-middleware');
const barMiddleware = require('bar-middleware');
const cors = require('cors');
server.use(bodyParser.json());
server.use(cors());
server.use('/Foo', fooMiddleware);
server.use('/Bar', barMiddleware);
const app = server.listen(PORT, () => {
    console.log(`You have reached : ${app.address().address}:${app.address().address}`);
});