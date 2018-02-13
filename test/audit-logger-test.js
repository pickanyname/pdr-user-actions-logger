// Executable expectations (unit tests) for the User Audit Logging utility

const expect = require('chai').expect;
const auditLogger = require('../user_audit/audit-logger');
const enumerateObjectProperties = require('../lib/enumerate-object-properties');

const args = {userId: '10001', userName: 'Jane User', ipAddress: '142.231.110.50'};

describe('User audit logger setup', () => {
  describe('Audit log for handling events of the security type', () => {
  	it("should have event type named 'Auditable security event'", () => {
  	  expect(auditLogger.securityType().securityName).to.be.equal('Auditable security event');
  	});
  });
  describe('Number of security events defined on the system', () => {
  	describe('There should be 4 security events that are being logged', () => {
  	  it('should have 4 security events defined on the system', () => {
  	  	expect(auditLogger.countEvents(auditLogger.securityEvents())).to.be.equal(4);
  	  });
  	});
  });
  describe('Audit log for handling sign in events', () => {
  	it("The signin event should be a string", () => {
  	  expect(auditLogger.securityEvents().signin).to.be.a('string');
  	});
  	it("should have the event labeled 'signin'", () => {
  	  expect(auditLogger.securityEvents().signin).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.securityEvents(), 'signin'));
  	});
  });
  describe('Audit log for handling sign out events', () => {
  	it("The signout event should be a string", () => {
  	  expect(auditLogger.securityEvents().signout).to.be.a('string');
  	});
  	it("should have the event labeled 'signout'", () => {
  	  expect(auditLogger.securityEvents().signout).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.securityEvents(), 'signout'));
  	});
  });
  describe('Audit log for handling incorrect password events', () => {
  	it("The incorrectPassword event should be a string", () => {
  	  expect(auditLogger.securityEvents().incorrectPassword).to.be.a('string');
  	});
  	it("should have the event labeled 'incorrectPassword'", () => {
  	  expect(auditLogger.securityEvents().incorrectPassword).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.securityEvents(), 'incorrectPassword'));
  	});
  });
  describe('Audit log for handling session timeout events', () => {
  	it("The sessionTimeout event should be a string", () => {
  	  expect(auditLogger.securityEvents().sessionTimeout).to.be.a('string');
  	});
  	it("should have the event labeled 'sessionTimeout'", () => {
  	  expect(auditLogger.securityEvents().sessionTimeout).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.securityEvents(), 'sessionTimeout'));
  	});
  });

  describe('Audit log for handling events of the registry type', () => {
  	it("should have event type named 'Auditable security event'", () => {
  	  expect(auditLogger.registryType().securityName).to.be.equal('Auditable registry event');
  	});
  });
  describe('Number of registry events defined on the system', () => {
  	describe('There should be 3 registry events that are being logged', () => {
  	  it('should have 3 registry events defined on the system', () => {
  	  	expect(auditLogger.countEvents(auditLogger.registryEvents())).to.be.equal(6);
  	  });
  	});
  });
  describe('Audit log for handling patient search events', () => {
  	it("The patientSearch event should be a string", () => {
  	  expect(auditLogger.registryEvents().patientSearch).to.be.a('string');
  	});
  	it("should have the event labeled 'patientSearch'", () => {
  	  expect(auditLogger.registryEvents().patientSearch).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.registryEvents(), 'patientSearch'));
  	});
  });
  describe('Audit log for handling patient viewing events', () => {
  	it("The patientViewing event should be a string", () => {
  	  expect(auditLogger.registryEvents().patientViewing).to.be.a('string');
  	});
  	it("should have the event labeled 'patientViewing'", () => {
  	  expect(auditLogger.registryEvents().patientViewing).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.registryEvents(), 'patientViewing'));
  	});
  });
  describe('Audit log for handling patient creation events', () => {
  	it("The patientCreation event should be a string", () => {
  	  expect(auditLogger.registryEvents().patientCreation).to.be.a('string');
  	});
  	it("should have the event labeled 'patientCreation'", () => {
  	  expect(auditLogger.registryEvents().patientCreation).to.be.equal(enumerateObjectProperties.findPropertyName(auditLogger.registryEvents(), 'patientCreation'));
  	});
  });

});


//Expectations pertaining to logging the security events
describe('User audit logger logs a security event', () => {
  describe('Log a sign in event', () => {
  	it("should receive 'successfully logged user sign in event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.signinEventLog(args));
  	  expect(prop).to.be.equal('Successfully logged user sign in event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });
  describe('Log a sign out event', () => {
  	it("should receive 'successfully logged user sign out event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.signoutEventLog(args));
      expect(prop).to.be.equal('Successfully logged user sign out event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });
  describe('Log an incorrect password event', () => {
  	it("should receive 'successfully logged the incorrect password event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.incorrectPasswordEventLog(args));
      expect(prop).to.be.equal('Successfully logged incorrect password event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });
  describe('Log a session timeout event', () => {
  	it("should receive 'successfully logged session timeout event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.sessionTimeoutEventLog(args));
      expect(prop).to.be.equal('Successfully logged session timeout event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });
});

//Expectations pertaining to logging the registry events
describe('User audit logger logs a registry event', () => {
  describe('Log a patient search event', () => {
  	it("should receive 'successfully logged patient search event' response", () => {
  	  parameters = {"firstName": "Joe", "lastName": "Public"};
      prop = enumerateObjectProperties.findProperty(auditLogger.patientSearchEventLog(args, parameters));
      expect(prop).to.be.equal('Successfully logged patient search event for user 10001 (Jane User), from 142.231.110.50, '  + "'" + JSON.stringify(parameters));
  	});
  });
  describe('Log a patient viewed event', () => {
  	it("should receive 'successfully logged patient viewed event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.patientViewedEventLog(args, parameters));
      expect(prop).to.be.equal('Successfully logged patient viewed event for user 10001 (Jane User), from 142.231.110.50, '  + "'" + JSON.stringify(parameters));
  	});
  });
  describe('Log a patient created event', () => {
  	it("should receive 'successfully logged patient created event' response", () => {
  	  parameters = {"firstName": "Joe", "lastName": "Public"};
      prop = enumerateObjectProperties.findProperty(auditLogger.patientCreatedEventLog(args, parameters));
      expect(prop).to.be.equal('Successfully logged patient created event for user 10001 (Jane User), from 142.231.110.50, '  + "'" + JSON.stringify(parameters));
  	});
  });
  describe('Log a period close event', () => {
  	it("should receive 'successfully logged a period close event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.periodCloseEventLog(args));
      expect(prop).to.be.equal('Successfully logged period close event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });
  describe('Log a hard close event', () => {
  	it("should receive 'successfully logged a hard close event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.hardCloseEventLog(args));
      expect(prop).to.be.equal('Successfully logged hard close event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });
  describe('Log invoice generated event', () => {
  	it("should receive 'successfully logged invoice generated event' response", () => {
      prop = enumerateObjectProperties.findProperty(auditLogger.invoiceGeneratedEventLog(args));
      expect(prop).to.be.equal('Successfully logged invoice generated event for user 10001 (Jane User), from 142.231.110.50');
  	});
  });

});




