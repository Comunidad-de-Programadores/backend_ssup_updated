import port from './port';
import '@babel/polyfill';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import conn from './conn';
import cors from 'cors';
import indexRoutes from './routes/index';
import { Server } from 'http';
import socket from 'socket.io';
//const Sequelize = require('sequelize')

const app = express();
const server = Server(app);
const io = socket(server, { cors: { origin: "*" } });
//const Op = Sequelize.Op;

//middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use((req, res, next) => { //req.Op = Op;
    res.io = io;
    next();
});
app.use(morgan('dev'));
let socketsconecteds = 0;
io.on('connection', (socket) => {
    socketsconecteds++;
    app.use('/api', indexRoutes);
    console.log(`CONECTANDO: ${socketsconecteds}`);
    socket.on("nombClients", (datas) => {
        socket.username = datas;
        io.emit('Totalclients', {
            socketsconecteds,
            username: datas
        });
    });
    socket.on('disconnect', () => {
        socketsconecteds--;
        io.emit('Totalclients', { socketsconecteds });
        console.log(`DESCONECTANDO: ${socketsconecteds}`);
    })
});

export default server;