'use strict'

const mysql = require('mysql2');

// Configura la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost', // Cambia esto si tu base de datos está en otro lugar
  user: 'root',      // Cambia esto si usas otro usuario
  password: '',      // Cambia esto si usas otra contraseña
  database: 'clases' // Cambia esto al nombre de tu base de datos
});

// Exporta el pool para usarlo en otros archivos
module.exports = pool.promise(); // Usa `.promise()` para trabajar con Promesas