'use strict';

var request = require('request');

module.exports.hello = function(event, context, callback) {
  // var xml = '<foo>bah</foo>';

  // callback(null, xml);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

  request('https://huginn-askalexa.kimptoc.net/users/1/web_requests/11/a-secret-key.rss', function(err, resp, body) {
    callback(null, body);
  });

};
