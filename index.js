//
const { json, send } = require('micro');
const { router, get } = require('microrouter');
const { postrouter, post } = require('microrouter');
const auditLogger = require('./user_audit/audit-logger');
const enumerateObjectProperties = require('./lib/enumerate-object-properties');

const signin = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp};
  prop = enumerateObjectProperties.findProperty(auditLogger.signinEventLog(args));
  if (prop === null) {
    const err = new Error('Signin event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const signout = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp};
  prop = enumerateObjectProperties.findProperty(auditLogger.signoutEventLog(args));
  if (prop === null) {
    const err = new Error('Signout event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const incorrectPassword = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp};
  prop = enumerateObjectProperties.findProperty(auditLogger.incorrectPasswordEventLog(args));
  if (prop === null) {
    const err = new Error('Incorrect password event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const sessionTimeout = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp};
  prop = enumerateObjectProperties.findProperty(auditLogger.sessionTimeoutEventLog(args));
  if (prop === null) {
    const err = new Error('Session timeout event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const patientSearch = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp, parameters: body.parameters};
  prop = enumerateObjectProperties.findProperty(auditLogger.patientSearchEventLog(args));
  if (prop === null) {
    const err = new Error('Patient search event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const patientViewed = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp, parameters: body.parameters};
  prop = enumerateObjectProperties.findProperty(auditLogger.patientViewedEventLog(args));
  if (prop === null) {
    const err = new Error('Patient viewed event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const patientCreated = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp, parameters: body.parameters};
  prop = enumerateObjectProperties.findProperty(auditLogger.patientCreatedEventLog(args));
  if (prop === null) {
    const err = new Error('Patient created event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const periodClose = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp, parameters: body.parameters};
  prop = enumerateObjectProperties.findProperty(auditLogger.periodCloseEventLog(args));
  if (prop === null) {
    const err = new Error('Period close event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const hardClose = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp, parameters: body.parameters};
  prop = enumerateObjectProperties.findProperty(auditLogger.hardCloseEventLog(args));
  if (prop === null) {
    const err = new Error('Hard close event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}

const invoiceGenerated = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp, parameters: body.parameters};
  prop = enumerateObjectProperties.findProperty(auditLogger.invoiceGeneratedEventLog(args));
  if (prop === null) {
    const err = new Error('Invoice generated event could not be logged');
    err.statusCode = 500;
    throw err;
  }
  send(res, 201, `${prop}`);
}


const testget = (req, res) => {
  send(res, 200, `Successfully processed HTTP GET ${req.params.who}`);
}

const notfound = (req, res) => {
  send(res, 400, 'Route not found');
}

module.exports = router(
  get('/testget/:who', testget),
  get('/*', notfound)
);

module.exports = router(
  post('/signin', signin),
  post('/signout', signout),
  post('/incorrectPassword', incorrectPassword),
  post('/sessionTimeout', sessionTimeout),
  post('/patientSearch', patientSearch),
  post('/patientViewed', patientViewed),
  post('/patientCreated', patientCreated),
  post('/periodClose', periodClose),
  post('/hardClose', hardClose),
  post('/invoiceGenerated', invoiceGenerated)
);
