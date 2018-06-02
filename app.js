var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar variable
var app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importar rutas
var appRoutesV1 = require('./routes/v1/app');
var usuarioRoutesV1 = require('./routes/v1/usuario');
var loginRoutesV1 = require('./routes/v1/login');
var estodoRoutesV1 = require('./routes/v1/estado');
var cadenaRoutesV1 = require('./routes/v1/cadena');

//conexion a la base de datos

var hostMongo = 'localhost';
var portMongo = '27017';

mongoose.connection.openUri(`mongodb://${hostMongo}:${portMongo}/seguimiento_sepDB`, (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

//rutas
app.use('/api/v1', cadenaRoutesV1);
app.use('/api/v1', estodoRoutesV1);
app.use('/api/v1', loginRoutesV1);
app.use('/api/v1', usuarioRoutesV1);
app.use('/api/v1', appRoutesV1);


//activar servidor
app.listen(3000, () => {
    console.log('Corriendo puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});