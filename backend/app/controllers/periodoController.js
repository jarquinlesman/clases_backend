const db = require('../config/db');

const periodos = (req, res) => {
    const datos = req.body;
    let id_period = datos.id_periodo;
    let fecha_ini = datos.fecha_inicio;
    let fecha_fin = datos.fecha_final;
    let insert_periodo = 'INSERT INTO periodos (id_periodo, fecha_inicio, fecha_final) VALUES (?, ?, ?)'

    db.query(insert_periodo, [id_period, fecha_ini, fecha_fin], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
};

module.exports = { periodos };