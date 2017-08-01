/* Importar o express */
var express = require('express');

/* Importar o consign */
var consign = require('consign');

/* Importar o body-parser */
var bodyParser = require('body-parser');

/* Importar o express-validator */
var expressValidator = require('express-validator');

/* Iniciar o objeto do express */
var app = express();

/* Parametrizar 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configuracao de middlewares */
/* express.static */
app.use(express.static('./app/public'));
/* body-parser */
app.use(bodyParser.urlencoded({extended: true}));
/* express.validator */
app.use(expressValidator());

/* Autoload dos modulos necessarios para dentro do objeto app */
consign()
   .include('app/routes')
   .then('app/models')
   .then('app/controllers')
   .into(app);


/* Exportar o objeto app */
module.exports = app;
