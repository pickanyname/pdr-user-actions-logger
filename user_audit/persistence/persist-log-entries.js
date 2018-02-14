//Persist Log Entries
const auditLog = require('./user-actions-audit-log');

module.exports = {
  persistEvent: (args) => {
    auditLog.log().sync()
      .then(() => userActionsAuditLog.create({
        userId: args['userId'],
        userName: args['userName'],
        userIp: args['userIp'],
        timestamp: new Date()
      }))
      .then(auditLog => {
        console.log(auditLog.toJSON());
      });
  },
  persistPatientEvent: (args, properties) => {
  }
}
