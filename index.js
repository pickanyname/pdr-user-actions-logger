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
    const err = new Error('Signout event could not be logged');
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
  post('/incorrectPassword', incorrectPassword)
);

//module.exports = async(req, res) => {
//  const data = await json(req);
//  console.log(data);
//
//  return 'Data logged to your console';
//}