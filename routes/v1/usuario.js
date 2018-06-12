var express = require('express');
var app = express();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var usuarioController = require('./../../controllers/v1/usuarioController');
var mdAutenticacion = require('./../../middlewares/v1/autenticacion');

// ==========================================
// obtener todos los usuarios
// ==========================================
app.get('/usuario/', /*mdAutenticacion.verificaToken, */ usuarioController.getUsuario);

// ==========================================
// actualizar un usuario
// ==========================================
app.put('/usuario/:id', mdAutenticacion.verificaToken, usuarioController.updateUsuario);

// ==========================================
// crear un nuevo usuarios 
// ==========================================

app.post('/usuario/', mdAutenticacion.verificaToken, usuarioController.saveUsuario);



//====================================================
//desabilitar usuario
//=====================================================

app.put('/usuario/disponible/:id', mdAutenticacion.verificaToken, usuarioController.changeAvailability);


module.exports = app;