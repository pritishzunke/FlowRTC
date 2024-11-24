const userDisconnect = (socket) => {
    socket.on('disconnect', () => {
        console.log('Connection disconnected:', socket.id);
    });
};

const joinRoom = (socket) => {
    socket.on('joinRoom', (roomId, name) => {
        socket.join(roomId);
        console.log(socket.id, 'Has joined room: ', roomId);
        const usersInRoom = Array.from(
            socket.server.sockets.adapter.rooms.get(roomId) || []
        );
        console.log(`Users in room ${roomId}:`, usersInRoom);
        socket.to(roomId).emit('joinRoom', socket.id, name);
    });
};

const leaveRoom = (socket) => {
    socket.on('leaveRoom', (roomId, name) => {
        socket.leave(roomId);
        console.log(socket.id, 'Has left room: ', roomId);
        const usersInRoom = Array.from(
            socket.server.sockets.adapter.rooms.get(roomId) || []
        );
        console.log(`Users in room ${roomId}:`, usersInRoom);
        socket.to(roomId).emit('leaveRoom', socket.id, name);
    });
};

const sendMessage = (socket) => {};

module.exports = { userDisconnect, joinRoom, leaveRoom, sendMessage };
