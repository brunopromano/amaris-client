# Amaris Client

Client (frontend) criado usando o framework [Angular](https://angular.io/docs/) versão 14.

## Executando Localmente

### Requisitos

[Node versão 16](https://nodejs.org/en/download/)  

### Build & Run

Primeiramente é necessário baixar as dependências do projeto. No terminal, aponte para a raiz do projeto e entre com o comando:  
`$ npm install`  

Após terminar a instalação das dependências execute a aplicação com:  
`$ npm start`

## Executando com Docker

### Requisitos

[Docker](https://docs.docker.com/desktop/install/windows-install/)

### Criando e executando o container

Os arquivos Dockerfile e docker-compose.yml possui todas as diretivas para executar criar e executar o container do client. Para executá-lo basta abrir um terminal, apontar para a raiz do projeto e entrar com o comando:
`$ docker compose up -d --build`  
Dica: suba os containers do backend primeiro
