const express = require('express');
const { createServer } = require('http');
const env = require('dotenv').config();
const { Server } = require('socket.io');

const cors = require('cors');

const routes = require('./routes/routes');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

app.use(cors());
app.use(express.json());

app.use('/', routes);

//handle ws connection
io.on('connection', (socket) => {
    console.log('New connection:', socket.id);
    //handle disconnection
    socket.on('disconnect', () => {
        console.log('Connection disconnected:', socket.id);
    });
});

console.log('Server listening on port ', process.env.PORT);
httpServer.listen(process.env.PORT);
