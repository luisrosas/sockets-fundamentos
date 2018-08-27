var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Se perdio conexión con el servidor');
});

socket.emit('enviaMensaje', {
    nombre: 'Luis Rosas',
    mensaje: 'Hola Mundo!'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviaMensaje', function (data) {
    console.log('Servidor: ', data);
});