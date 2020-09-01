const express = require('express')
const paginaTodo = require('./views/template_todo_app')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(paginaTodo);
})

app.get("/testenodemon", (req, res) => {
	res.send(`
		<h1>Rota do nodemon</h1>
	`);
});

app.listen(port, () => {
  console.log(`Servidor inicializado`)
})