'use strict';

module.exports.hello = (event, context, callback) => {
  var xml = '<foo>bah</foo>';

  callback(null, xml);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
