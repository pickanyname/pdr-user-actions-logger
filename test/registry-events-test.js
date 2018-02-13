const expect = require('chai').expect;
const registryEvents = require('../auditable_user_events/registry-events');

describe('Registry events', () => {
  describe('Patient search event', () => {
  	it("should have the name 'Patient search event'", () => {
  	  expect(registryEvents().patientSearch).to.be.equal('Patient search event');
  	});
  });

  describe('Patient viewing event', () => {
  	it("should have the name 'Patient viewing event'", () => {
  	  expect(registryEvents().patientViewing).to.be.equal('Patient viewing event');
  	});
  });

  describe('Patient creation event', () => {
  	it("should have the name 'Patient creation event'", () => {
  	  expect(registryEvents().patientCreation).to.be.equal('Patient creation event');
  	});
  });

});