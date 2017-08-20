export function test(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a test message',
      context,
      event,
    }),
  };

  callback(null, response);
}

export function api(event, context, callback) {
  callback(new Error('Not implemented yet'));
}
