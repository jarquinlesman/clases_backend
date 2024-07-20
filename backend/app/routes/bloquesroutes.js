const express = require('express');
const router = express.Router();

module.exports = (db) => {
    // Obtener todos los bloques
    router.get('/', (req, res) => {
        db.query('SELECT * FROM bloque', (err, results) => {
            if (err) {
                console.error('Error ejecutando la consulta:', err);
                res.status(500).send('Error en la consulta');
                return;
            }
            res.json(results);
        });
    });

    // Insertar un nuevo bloque
    router.post('/', (req, res) => {
        const { codigo_bloque, nombre_bloque } = req.body;
        const query = 'INSERT INTO bloque (codigo_bloque, nombre_bloque) VALUES (?, ?)';
        db.query(query, [codigo_bloque, nombre_bloque], (err, results) => {
            if (err) {
                console.error('Error ejecutando la consulta:', err);
                res.status(500).send('Error en la consulta');
                return;
            }
            res.json(results);
        });
    });

    // Actualizar un bloque por su código
    router.patch('/:codigo_bloque', (req, res) => {
        const { codigo_bloque } = req.params;
        const { nombre_bloque } = req.body;

        if (!nombre_bloque) {
            return res.status(400).json({ error: 'El campo nombre_bloque es requerido' });
        }

        const query = 'UPDATE bloque SET nombre_bloque = ? WHERE codigo_bloque = ?';
        db.query(query, [nombre_bloque, codigo_bloque], (err, results) => {
            if (err) {
                console.error('Error ejecutando la consulta:', err);
                res.status(500).send('Error en la consulta');
                return;
            }

            if (results.changedRows === 0) {
                return res.status(404).json({ error: `No se encontró ningún bloque con el código ${codigo_bloque}` });
            }

            res.json({
                message: `Se actualizó correctamente el bloque con código ${codigo_bloque}`,
                affectedRows: results.affectedRows
            });
        });
    });

    // Eliminar un bloque por su código
    router.delete('/:codigo_bloque', (req, res) => {
        const { codigo_bloque } = req.params;
        const query = 'DELETE FROM bloque WHERE codigo_bloque = ?';
        db.query(query, [codigo_bloque], (err, results) => {
            if (err) {
                console.error('Error ejecutando la consulta:', err);
                res.status(500).send('Error en la consulta');
                return;
            }

            res.json({
                message: `Se eliminó correctamente el bloque con código ${codigo_bloque}`,
                affectedRows: results.affectedRows
            });
        });
    });

    return router;
};