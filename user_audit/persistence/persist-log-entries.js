//Persist Log Entries
const auditLog = require('./user-actions-audit-log');

module.exports = {
  persistEvent: (args, eventType, actionType) => {
    auditLog.log().sync()
      .then(() => userActionsAuditLog.create({
        userId: args['userId'],
        userName: args['userName'],
        userIp: args['userIp'],
        eventType: eventType,
        actionType: actionType,
        timestamp: new Date()
      }))
      .then(auditLog => {
        console.log(auditLog.toJSON());
      });
  },
  persistPatientEvent: (args, eventType, actionType) => {
    auditLog.log().sync()
      .then(() => userActionsAuditLog.create({
        userId: args['userId'],
        userName: args['userName'],
        userIp: args['userIp'],
        eventType: eventType,
        actionType: actionType,
        parameters: args['parameters'],
        timestamp: new Date()
      }))
      .then(auditLog => {
        console.log(auditLog.toJSON());
      });
  }
}
