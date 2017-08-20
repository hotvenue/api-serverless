export default function handler(event, context, callback) {
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
