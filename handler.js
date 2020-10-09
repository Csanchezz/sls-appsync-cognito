'use strict';

exports.graphql = async (event, context ) => {

  const consumerKey= event.arguments.consumer_key;
  const consumerSecret= event.arguments.consumer_secret;

  // return { statusCode: 200, body: JSON.stringify( { message: 'Helloworld', input: event, }, null, 2 ), };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return "Hello World";
};
