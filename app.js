/* Importar as configuracoes do servidor */
var app = require('./config/server');

/* Parametrizacao para porta de escuta */
var server = app.listen(80, function() {
   console.log('Servidor Online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexao por websocket */
io.on('connection', function(socket) {
   console.log('Usuario conectou');

   socket.on('disconnect', function() {
      console.log('Usuario desconectou');
   })
})
