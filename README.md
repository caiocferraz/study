# CCFLabs Azure Landing Page

Este repositório contém uma aplicação Node.js/Express simples da **CCFLabs** que serve uma página institucional estática.

## O que ele faz

- expõe um servidor HTTP com Express;
- renderiza uma landing page de consultoria Azure na rota `/`;
- disponibiliza execução via Docker.

## Arquivos principais

- `/server.js`: servidor e HTML da página inicial;
- `/package.json`: metadados do projeto e script `start`;
- `/Dockerfile`: imagem para execução em container.
