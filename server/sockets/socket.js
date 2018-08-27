const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviaMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido!'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.on('enviaMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviaMensaje', data);
        // if (data.nombre) {
        //     callback({
        //         resp: 'Todo Ok'
        //     });
        // } else {
        //     callback({
        //         resp: 'Algo salio mal'
        //     });
        // }
    });
});