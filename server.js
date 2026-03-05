const express = require('express');
const app = express();
const port = process.env.PORT || 443;

// Página inicial
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
        .services {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
