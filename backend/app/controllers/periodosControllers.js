const db = require('../config/db');

app.post('/api/bloques', (req, res) => {
    const datos = req.body;
    let id_bloque = datos.codigo_bloque;
    let name_bloque = datos.nombre_bloque;
    let singup = 'INSERT INTO bloque (codigo_bloque, nombre_bloque) VALUES (?, ?)'

    db.query(singup, [id_bloque, name_bloque], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
});
