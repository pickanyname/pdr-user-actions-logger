//Audit Logger
const auditableSecurityEvents = require('../auditable_user_events/security-events');
const auditableRegistryEvents = require('../auditable_user_events/registry-events');
const enumerateObjectProperties = require('../lib/enumerate-object-properties');

module.exports = {
  countEvents: (events) => {
  	return enumerateObjectProperties.countProperties(events);
  },
  securityType: () => {
  	securityType = {securityName: 'Auditable security event'}; 
  	return securityType;
  },
  securityEvents: () => {
  	return auditableSecurityEvents();
  },
  registryType: () => {
  	registryTypes = {securityName: 'Auditable registry event'};
  	return registryTypes;
  },
  registryEvents: () => {
  	return auditableRegistryEvents();
  },

  signinEventLog: (args) => {
  	return {response: 'Successfully logged user sign in event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  signoutEventLog: (args) => {
    return {response: 'Successfully logged user sign out event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  incorrectPasswordEventLog: (args) => {
    return {response: 'Successfully logged incorrect password event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  sessionTimeoutEventLog: (args) => {
    return {response: 'Successfully logged session timeout event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  patientSearchEventLog: (args, parameters) => {
    return {response: "Successfully logged patient search event for user " + args['userId'] + " (" + args['userName'] + "), " + "from " + args['ipAddress'] + ", '"  + JSON.stringify(parameters)};
  },
  patientViewedEventLog: (args, parameters) => {
    return {response: "Successfully logged patient viewed event for user " + args['userId'] + " (" + args['userName'] + "), " + "from " + args['ipAddress'] + ", '"  + JSON.stringify(parameters)};
  },
  patientCreatedEventLog: (args, parameters) => {
    return {response: "Successfully logged patient created event for user " + args['userId'] + " (" + args['userName'] + "), " + "from " + args['ipAddress'] + ", '"  + JSON.stringify(parameters)};
  },
  periodCloseEventLog: (args) => {
    return {response: 'Successfully logged period close event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  hardCloseEventLog: (args) => {
    return {response: 'Successfully logged hard close event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  invoiceGeneratedEventLog: (args) => {
    return {response: 'Successfully logged invoice generated event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  }
}
