const express = require('express');
const app = express();
const port = process.env.PORT || 443;

// Middleware para servir HTML estilizado
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Hello World v2</title>
      <style>
        body {
          background-color: #282c34;
          color: #61dafb;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        h1 {
          font-size: 3em;
          text-shadow: 2px 2px 5px black;
        }
      </style>
    </head>
    <body>
      <h1>Hello World v2 from Node 14!</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
