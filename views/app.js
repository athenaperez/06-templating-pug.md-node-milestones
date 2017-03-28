'use strict'

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');








app.get('/', (req, res, next) => {
	res.render('index')
});
app.get('/about', (req, res, next) => {
	res.render('about')
});
app.get('/inventory', (req, res, next) => {
	res.render('inventory')
});



const port = process.env.PORT || 3000
app.set('port', port)


app.listen(port, () =>
	console.log(`Listening on port ${port}`)
)
