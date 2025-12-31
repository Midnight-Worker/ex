const express = require('express');
//const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
	res.render("index");
});

app.listen(3003);
