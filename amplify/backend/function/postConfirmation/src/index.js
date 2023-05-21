exports.handler = function afterConfirmationTrigger(event, context, callback) {
  const AWS = require('aws-sdk');
  const cognitoISP = new AWS.CognitoIdentityServiceProvider();

  const params = {
    GroupName: 'profesores',
    UserPoolId: event.userPoolId,
    Username: event.userName
  };

  cognitoISP
    .adminAddUserToGroup(params)
    .promise()
    .then(() => callback(null, event))
    .catch(err => callback(err, event));
};
