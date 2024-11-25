const userDisconnect = (socket) => {
    socket.on('disconnect', () => {
        console.log('Connection disconnected:', socket.id);
    });
};

const sdpOffer = (socket) => {
    socket.on('sdpOffer', ({ offer, roomId }) => {
        console.log(
            socket.id,
            'has sent offer to room members in room :',
            roomId,
            offer
        );
        socket.broadcast.to(roomId).emit('sdpOffer', offer);
    });
};

const sdpAnswer = (socket) => {
    socket.on('sdpAnswer', ({ answer, roomId }) => {
        console.log(
            socket.id,
            'has sent answer to room members in room :',
            roomId
        );
        socket.broadcast.to(roomId).emit('sdpAnswer', answer);
    });
};

const iceCandidates = (socket) => {
    socket.on('iceCandidates', ({ roomId, candidate }) => {
        console.log(
            socket.id,
            'has sent cadidate to room members in room :',
            roomId
        );
        socket.broadcast.to(roomId).emit('iceCandidates', candidate);
    });
};

const joinRoom = (socket) => {
    socket.on('joinRoom', ({ roomId }) => {
        socket.join(roomId);
        console.log(socket.id, 'Has joined room: ', roomId);
        const usersInRoom = Array.from(
            socket.server.sockets.adapter.rooms.get(roomId) || []
        );
        console.log(`Users in room ${roomId}:`, usersInRoom);
        socket.to(roomId).emit('joinRoom', socket.id);
    });
};

const leaveRoom = (socket) => {
    socket.on('leaveRoom', ({ roomId }) => {
        socket.leave(roomId);
        console.log(socket.id, 'Has left room: ', roomId);
        const usersInRoom = Array.from(
            socket.server.sockets.adapter.rooms.get(roomId) || []
        );
        console.log(`Users in room ${roomId}:`, usersInRoom);
        socket.to(roomId).emit('leaveRoom', socket.id);
    });
};

const sendMessage = (socket) => {};

module.exports = {
    userDisconnect,
    joinRoom,
    leaveRoom,
    sendMessage,
    sdpAnswer,
    sdpOffer,
    iceCandidates,
};
