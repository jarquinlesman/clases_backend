'use strict'

const config = require("../config/config");
const Sequelize = require("sequelize");

const SequelizeInstance = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    operatorsAliases: false,
    pool: {
        max: config.POOL_MAX,
        min: config.POOL_MIN,
        acquire: config.POOL_ACQUIRE,
        idle: config.POOL_IDLE
    }
});

const db = {};

db.Sequelize = Sequelize;
db.SequelizeInstance = SequelizeInstance;

module.exports = db;