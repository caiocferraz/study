const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node 14!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
