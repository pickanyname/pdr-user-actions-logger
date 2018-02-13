const expect = require('chai').expect;
const securityEvents = require('../auditable_user_events/security-events');

describe('Security events', () => {
  describe('Sign in event', () => {
  	it("should have the name 'Sign in event'", () => {
  	  expect(securityEvents().signin).to.be.equal('Sign in event');
  	});
  });

  describe('Sign out event', () => {
  	it("should have the name 'Sign out event'", () => {
  	  expect(securityEvents().signout).to.be.equal('Sign out event');
  	});
  });

  describe('Incorrect password event', () => {
  	it("should have the name 'Incorrect password event'", () => {
  	  expect(securityEvents().incorrectPassword).to.be.equal('Incorrect password event');
  	});
  });

  describe('Session timeout event', () => {
  	it("should have the name 'Session timeout event'", () => {
  	  expect(securityEvents().sessionTimeout).to.be.equal('Session timeout event');
  	});
  });

});