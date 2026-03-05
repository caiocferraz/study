const express = require('express');
const app = express();
const port = process.env.PORT || 443;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>CCFLabs - Consultoria Azure</title>
      <style>
        body {
          background: #f4f4f4;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          text-align: center;
        }
        header {
          background-color: #0078D4;
          color: white;
          padding: 20px;
        }
        header img {
          height: 80px;
        }
        h1 {
          margin: 20px 0;
          color: #333;
        }
        p {
          font-size: 1.2em;
          color: #555;
          max-width: 600px;
          margin: auto;
        }
        nav {
          margin: 20px;
        }
        nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #0078D4;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <header>
        <img src="https://ccflabs.blob.core.windows.net/assets/ChatGPT%20Image%20Mar%205,%202026,%2006_16_23%20PM.png" alt="Logo CCFLabs">
        <h1>CCFLabs - Consultoria Microsoft Azure</h1>
      </header>
      <p>Somos uma consultoria fictícia especializada em soluções Microsoft Azure. 
      Ajudamos empresas a modernizar suas aplicações, implementar CI/CD e acelerar a jornada para a nuvem.</p>
      <nav>
        <a href="/sobre">Sobre nós</a>
        <a href="/api/info">API JSON</a>
      </nav>
    </body>
    </html>
  `);
});

app.get('/sobre', (req, res) => {
  res.send(`
    <h2>Sobre a CCFLabs</h2>
    <p>A CCFLabs é uma empresa fictícia criada para fins de laboratório. 
    Trabalhamos com consultoria em Microsoft Azure, containers, CI/CD e soluções modernas de nuvem.</p>
  `);
});

app.get('/api/info', (req, res) => {
  res.json({
    empresa: "CCFLabs",
    foco: "Consultoria Microsoft Azure",
    versao: "4.0.0",
    mensagem: "Aplicação fictícia com logo e identidade visual rodando em Node 14"
  });
});

app.listen(port, () => {
  console.log(`Servidor CCFLabs rodando na porta ${port}`);
});
