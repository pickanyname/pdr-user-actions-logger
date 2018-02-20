//Persist Log Entries
const auditLog = require('./user-actions-audit-log');

console.log("********************AudiLog: ", auditLog.log());

module.exports = {
  persistEvent: (args, eventType, actionType) => {
    auditLog.log().create({
        userId: args['userId'],
        userName: args['userName'],
        userIp: args['userIp'],
        eventType: eventType,
        actionType: actionType,
        timestamp: new Date()
      }).then(data => { 
        console.log("hello: ", data);
      })
  }
  // persistPatientEvent: (args, eventType, actionType) => {
  //   auditLog.log().sync()
  //     .then(() => UserActionsAuditLogs.create({
  //       userId: args['userId'],
  //       userName: args['userName'],
  //       userIp: args['userIp'],
  //       eventType: eventType,
  //       actionType: actionType,
  //       parameters: args['parameters'],
  //       timestamp: new Date()
  //     }))
  //     .then(auditLog => {
  //       console.log(auditLog.toJSON());
  //     });
  // }
}
