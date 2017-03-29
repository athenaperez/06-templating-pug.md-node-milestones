'use strict'

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');


const pastries = [
	{
		one: 'uno',
		price: 12.34
	},
	{
		one: 'dos'
	},
	{
		one: 'tres'
	},
	{
		one: 'quatro'
	},
	{
		one: 'cinco'
	}
];





app.get('/', (req, res, next) => {
	res.render('index')
});
app.get('/about', (req, res, next) => {
	res.render('about')
});
app.get('/inventory', (req, res, next) => {
	res.render('inventory', {inventory: pastries})
});



const port = process.env.PORT || 3000
app.set('port', port)


app.listen(port, () =>
	console.log(`Listening on port ${port}`)
)
