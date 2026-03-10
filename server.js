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
          background: #392f96;
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
        }
        .service-box {
          background: white;
          border-radius: 8px;
          padding: 20px;
          margin: 15px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          min-width: 280px;
        }
        .service-box h3 {
          color: #0078D4;
        }
        footer {
          background: #333;
          color: white;
          padding: 20px;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <header>
        <h2 style="margin: 0; font-size: 2.5em;">CCFLabs</h2>
        <h1>Welcome to CCFLabs - Azure Consultancy</h1>
      </header>
      
      <main>
        <p>Transforming your business with Azure cloud solutions.</p>
        
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <section class="services" id="services">
          <div class="service-box">
            <h3>Cloud Solutions</h3>
            <p>Scalable and secure cloud infrastructure on Azure.</p>
          </div>
          <div class="service-box">
            <h3>DevOps</h3>
            <p>CI/CD pipelines and automation for your applications.</p>
          </div>
          <div class="service-box">
            <h3>Consulting</h3>
            <p>Expert guidance for your digital transformation.</p>
          </div>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 CCFLabs. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});