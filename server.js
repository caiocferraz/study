const express = require('express');
const app = express();
const port = process.env.PORT || 443;

// Página inicial estilizada
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>CCFLabs - Consultoria Azure</title>
      <style>
        body {
          background: linear-gradient(135deg, #0078D4, #004578);
          color: #fff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          text-align: center;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2em;
          max-width: 600px;
        }
        a {
          color: #61dafb;
          text-decoration: none;
          font-size: 1.2em;
          margin: 10px;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <h1>Bem-vindo à CCFLabs</h1>
      <p>Somos uma consultoria fictícia especializada em soluções Microsoft Azure. 
      Nosso objetivo é ajudar empresas a modernizar suas aplicações e acelerar a jornada para a nuvem.</p>
      <a href="/sobre">Sobre nós</a>
      <a href="/api/info">API JSON</a>
    </body>
    </html>
  `);
});

// Página "Sobre"
app.get('/sobre', (req, res) => {
  res.send(`
    <h2>Sobre a CCFLabs</h2>
    <p>A CCFLabs é uma empresa fictícia criada para fins de laboratório. 
    Trabalhamos com consultoria em Microsoft Azure, ajudando clientes a implementar CI/CD, containers e soluções modernas de nuvem.</p>
  `);
});

// API simples que retorna JSON
app.get('/api/info', (req, res) => {
  res.json({
    empresa: "CCFLabs",
    foco: "Consultoria Microsoft Azure",
    versao: "3.0.0",
    mensagem: "Aplicação fictícia rodando em Node 14 com Azure App Service"
  });
});

app.listen(port, () => {
  console.log(`Servidor CCFLabs rodando na porta ${port}`);
});
