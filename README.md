# chat-web
## Sistema web para chat online
## Teconologias:
* React
* Styled-components
* Socket.io/client

## Instalação
### Para baixar o projeto para a sua máquina basta usar o seguinte comando:
```
git clone https://github.com/fernangb/chat-web
```
### Para instalar todos os pacotes e bibliotecas, basta rodar o seguinte comando:
```
yarn
```

## Rodar o programa
### Para rodar o programa, basta rodar o seguinte comando:
```
yarn start
```
Caso deseje realizar alguma mudança, basta modificar o arquivo package.json, na parte de scripts

## Rotas
```
http://localhost:3000/ **rota**
```
O projeto possui as seguintes rotas:
* main: tela inicial, mostrando os chats abertos
** ao entrar em um chat, o usuário entra como **ouvinte**, podendo visualizar as mensagens, mas sem poder enviá-las
* signup: cadastro
* signin: login
* dashboard: tela principal após realizar o login. 
** ao entrar em um chat, o usuário entra como **usuário**, podendo visualizar e enviar mensagens
** o usuário pode criar um chat
