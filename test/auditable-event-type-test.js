const expect = require('chai').expect;
const auditableEventTypes = require('../auditable_user_events/auditable-event-types');

describe('Auditable event types', () => {
  describe('Security event types',() => {
  	it("should have the name 'Auditable security event'", () => {
  	  expect(auditableEventTypes().securityEvent).to.be.equal('Auditable security event');
  	});
  });

  describe('Registry event types', () => {
  	it("should have the name 'Auditable registry event'", () => {
  	  expect(auditableEventTypes().registryEvent).to.be.equal('Auditable registry event');  		
  	});
  });
});