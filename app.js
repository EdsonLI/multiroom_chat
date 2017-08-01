/* Importar as configuracoes do servidor */
var app = require('./config/server');

/* Parametrizacao para porta de escuta */
app.listen(80, function() {
   console.log('Servidor Online');
})
