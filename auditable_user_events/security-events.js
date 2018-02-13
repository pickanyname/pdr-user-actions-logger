// Security Events

function securityEvents() {
  return {signin: 'Sign in event', 
          signout: 'Sign out event', 
          incorrectPassword: 'Incorrect password event', 
          sessionTimeout: 'Session timeout event'};
}

module.exports = securityEvents;