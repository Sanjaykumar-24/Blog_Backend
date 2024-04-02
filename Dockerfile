FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY npm start