// User Actions Audit Log
const Sequelize = require('sequelize');
const configSequelize = require('./config/config-sequelize');
const sqlDatabase = configSequelize.mssql();

module.exports = {
  log: () => {
    const userActionsAuditLog = sqlDatabase.define('userActionsAuditLogs', {
      //userActionsAuditLogId: Sequelize.UUIDV4,
      userId: Sequelize.STRING,
      userName: Sequelize.STRING,
      userIp: Sequelize.STRING,
      eventType: Sequelize.STRING,
      actionType: Sequelize.STRING,
      parameters: Sequelize.STRING,
      timestamp: Sequelize.DATE
    });
  return userActionsAuditLog;
  }
}