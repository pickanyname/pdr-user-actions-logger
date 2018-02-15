//
const { json, send } = require('micro');
const { router, get } = require('microrouter');
const { postrouter, post } = require('microrouter');
const auditLogger = require('./user_audit/audit-logger');
const enumerateObjectProperties = require('./lib/enumerate-object-properties');

const signin = (req, res) => {
  send(res, 200, `Hi there ${req.params.who}`);
}

const signout = async (req, res) => {
  const body = await json(req);
  const args = {userId: body.userId, userName: body.userName, ipAddress: body.userIp};
  prop = enumerateObjectProperties.findProperty(auditLogger.signoutEventLog(args));
  send(res, 201, `Hi there ${prop}`);
}

const notfound = (req, res) => {
  send(res, 400, 'Route not found');
}

module.exports = router(
  get('/signin/:who', signin),
  get('/*', notfound)
);

module.exports = router(
  post('/signout', signout)
);

//module.exports = async(req, res) => {
//  const data = await json(req);
//  console.log(data);
//
//  return 'Data logged to your console';
//}