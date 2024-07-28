const db = require('../config/db');

const detalle_periodo = (req, res) => {
    const datos = req.body;
    let section = datos.seccion;
    let id_cat = datos.id_catedratico;
    let id_bloq = datos.id_bloque;
    let id_period = datos.id_periodo;
    let time = datos.hora_inicio;
    let insert_details = 'INSERT INTO detalle_periodo (seccion, id_catedratico, id_bloque, id_periodo, hora_inicio) VALUES (?, ?, ?, ?, ?)'

    db.query(insert_details, [section, id_cat, id_bloq, id_period, time], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
};

module.exports = { detalle_periodo };