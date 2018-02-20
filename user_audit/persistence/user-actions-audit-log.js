// User Actions Audit Log
const sequelize = require('sequelize');
const configSequelize = require('./config/config-sequelize');
const sqlDatabase = configSequelize.mssql();

module.exports = {
  log: () => {
    return sqlDatabase.define('UserActionsAuditLogs', {
      userActionsAuditLogsId: {
        type: sequelize.STRING,
        allowNull: true,
        primaryKey: true,
        field: 'UserActionsAuditLogsID'
      },
      userId: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'UserID'
      },
      userName: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'UserName'
      },
      userIp: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'UserIP'
      },
      eventType: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'EventType'
      },
      actionType: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'ActionType'
      },
      parameters: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'Parameters'
      },
      timestamp: {
        type: sequelize.DATE,
        allowNull: true,
        field: 'Timestamp'
      }
    }, {
      tableName: 'UserActionsAuditLogs',
      timestamps: false
    });
  }
}
