import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.8:3333', {
    autoConnect: false,
});

function connect(latitude, longitude, techs) {

    //envia para o backend
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect();

}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
};