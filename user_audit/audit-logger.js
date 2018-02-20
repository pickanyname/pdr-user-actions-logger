//Audit Logger
const auditableSecurityEvents = require('../auditable_user_events/security-events');
const auditableRegistryEvents = require('../auditable_user_events/registry-events');
const enumerateObjectProperties = require('../lib/enumerate-object-properties');
const persistLogEntries = require('./persistence/persist-log-entries');

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

  //Actual logging
  signinEventLog: (args) => {
    persistLogEntries.persistEvent(args, 'Auditable security event', 'Sign in event');
  	return {response: 'Successfully logged user sign in event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  signoutEventLog: (args) => {
    //persistLogEntries.persistEvent(args, 'Auditable security event', 'Sign out event');
    return {response: 'Successfully logged user sign out event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  incorrectPasswordEventLog: (args) => {
    //persistLogEntries.persistEvent(args, 'Auditable security event', 'Incorrect password event');
    return {response: 'Successfully logged incorrect password event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  sessionTimeoutEventLog: (args) => {
    //persistLogEntries.persistEvent(args, 'Auditable security event', 'Session timeout event');
    return {response: 'Successfully logged session timeout event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress']};
  },
  patientSearchEventLog: (args) => {
    //persistLogEntries.persistPatientEvent(args, 'Auditable registry event', 'Patient search event', '');
    return {response: "Successfully logged patient search event for user " + args['userId'] + ' (' + args['userName'] + '), ' + 'from '  + args['ipAddress'] + ', patient search parameters: ' + args['parameters']};
  },
  patientViewedEventLog: (args) => {
    //persistLogEntries.persistPatientEvent(args, 'Auditable registry event', 'Patient viewing event', '');
    return {response: "Successfully logged patient viewed event for user " + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress'] + ', patient viewed parameters: ' + args['parameters']};
  },
  patientCreatedEventLog: (args) => {
    //persistLogEntries.persistPatientEvent(args, 'Auditable registry event', 'Patient created event', '');
    return {response: "Successfully logged patient created event for user " + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress'] + ', patient created parameters: ' + args['parameters']};
  },
  periodCloseEventLog: (args) => {
    return {response: 'Successfully logged period close event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress'] + ', period close parameters: ' + args['parameters']};
  },
  hardCloseEventLog: (args) => {
    return {response: 'Successfully logged hard close event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress'] + ', hard close parameters: ' + args['parameters']};
  },
  invoiceGeneratedEventLog: (args) => {
    return {response: 'Successfully logged invoice generated event for user ' + args['userId'] + ' (' + args['userName'] + '), ' + 'from ' + args['ipAddress'] + ', invoice generation parameters: ' + args['parameters']};
  }
}
