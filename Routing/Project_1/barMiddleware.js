const express = require('express');
const barRoutes = express.Router();

barRoutes.get('/', (req, res) => { 
    res.send('<h1>Bar at its root!</h1>')
});

barRoutes.get('/None', (req, res) => { 
    res.send('<h1>Bar None Routing is Fun!</h1>')
});