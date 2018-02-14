// Configure the underlying persistence layer
const Sequelize = require('sequelize');

module.exports = {
  mssql: () => {
    const sqlDatabase = new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
    return sqlDatabase;
  }
}