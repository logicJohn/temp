

const express = require('express');
const winston = require('winston');

const app = express();

const HOST = '0.0.0.0';
const PORT = 8080;


app.get('/', (req,res) => {
	res.send('hello world#@$% openshift')
});

app.listen(PORT, () => {
	console.log(`hello world, server is listening on http://${HOST}:${PORT}`)
});
