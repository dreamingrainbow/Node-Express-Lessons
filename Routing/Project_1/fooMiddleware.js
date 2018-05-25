const express = require('express');
const fooRoutes = express.Router();

fooRoutes.get('/', (req, res) => { 
    res.send('<h1>Foo with no bar is no foo bar!</h1>')
});

fooRoutes.get('/bar', (req, res) => { 
    res.send('<h1>Foo with Bar is foobar!</h1>')
});