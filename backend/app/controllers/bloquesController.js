const db = require('../config/db');

const getBloques = async (req, res) => {
    try {
        const [results] = await db.SequelizeInstance.query('SELECT codigo_bloque, nombre_bloque FROM bloque');
        console.log(results); // Log para verificar los datos en la consola del servidor
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

module.exports = { getBloques };