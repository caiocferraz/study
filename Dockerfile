# Usa Node.js 14 como base
FROM node:14

# Define diretório de trabalho
WORKDIR /usr/src/app

# Copia dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia código
COPY . .

# Expõe porta
EXPOSE 80

# Comando de inicialização
CMD ["npm", "start"]
