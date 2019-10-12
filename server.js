'use strict'

const http = require('http');
const loader = require('./utils/modelLoader');
const express = require('express');
var cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const cliente = require('./modulos/Cliente/Cliente');
const pdf = require('./modulos/pdf/pdf');
const Usuario = require('./modulos/Usuario/Usuario');
const Chave = require('./modulos/Chave/Chave');
const Chave_Usuario = require('./modulos/Chave_Usuario/Chave_Usuario');
const Box = require('./modulos/Box/Box');

const {  Box: BoxController } = require('./App/models');
//const { cliente } = require('./App/models');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);


app.use(cors());

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

*/
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));



const port = normalizePort('3333');
app.set('port', port);


const usuariosConectados = {};
// Criar servidor HTTP.
io.on("connection", socket => {
    console.log(`Usuario conectado: ${socket.id}`);
    
    console.dir(socket);
    
    const { usuCodigo } = socket.handshake.query;
    usuariosConectados[usuCodigo] = socket.id;
    
    BoxController
        .findAll( { where: { BoxUsuCodigo: usuCodigo } } )
        .then((data) => {
            socket.emit('Mensagem', data );
        }).catch((error) => {
            console.log(error);
        });

    socket.on('Api', box =>{
        socket.join(box);
        console.log(`2- ${box} - id: ${socket.id} - ${new Date()}`);
    })
    socket.on('disconnect', box =>{
        console.log(`3- ${box} - id: ${socket.id} - ${new Date()}`);
        const { usuCodigo } = socket.handshake.query;
        delete usuariosConectados[usuCodigo];
        console.log(usuariosConectados);
    })
});

//midleware para disponibilizar o socket para toda aplicação
app.use((req, res, next) =>{
    //console.log(req);
    req.io = io;
    req.usuariosConectados = usuariosConectados;
    console.log(`usuarios conectados: ${req.usuariosConectados}`);
    return next();
});


cliente.init(app);
pdf.init(app);
Usuario.init(app);
Chave.init(app);
Chave_Usuario.init(app);
Box.init(app);

// Escutar na porta todas as interfaces de rede.

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


// Normalizar uma porta em um número, string, ou falso.

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // pipe nomeado
        return val;
    }

    if (port >= 0) {
        // número da porta
        return port;
    }

    return false;
}

// Ouvinte de eventos para o servidor HTTP evento "erro".

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // Ouvir erros com mensagens amigáveis
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' exige privilégios elevados');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

 // ouvir eventos para o servidor HTTP.

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind);

}