const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// const mysql = require('mysql2');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// const db = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB,
//   port: 3306,
//   fatal: true
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
// });

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trees = require("./tree.model.js")(sequelize, Sequelize);

module.exports = db;