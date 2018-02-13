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

  signinEventLog: (userId) => {
  	return {response: "Successfully logged user sign in event for user " + userId};
  },
  signoutEventLog: (userId) => {
  	return {response: "Successfully logged user sign out event for user " + userId};
  },
  incorrectPasswordEventLog: (userName) => {
  	return {response: "Successfully logged incorrect password event for username '" + userName + "'"};
  },
  sessionTimeoutEventLog: (userName) => {
  	return {response: "Successfully logged session timeout event for username '" + userName + "'"};
  },
  patientSearchEventLog: (parameters) => {
  	return {response: "Successfully logged patient search event for parameters '" + JSON.stringify(parameters)};
  },
  patientViewedEventLog: (userName) => {
  	return {response: "Successfully logged patient viewed event for username '" + userName + "'"};
  },
  patientCreatedEventLog: (parameters) => {
  	return {response: "Successfully logged patient created event for username '" + JSON.stringify(parameters)};
  },
  periodCloseEventLog: (userId) => {
  	return {response: "Successfully logged period close event"};
  },
  hardCloseEventLog: (userId) => {
  	return {response: "Successfully logged hard close event"};
  },
  invoiceGeneratedEventLog: (userId) => {
  	return {response: "Successfully logged invoice generated event"};
  }
}
