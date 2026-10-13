const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/gestion-empleados';

mongoose.connect(URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error al conectar a la base de datos:', err.message));

module.exports = { mongoose };