import { createServer, IncomingMessage, ServerResponse } from 'http';

/**
 * function onRequest
 *
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @returns {void}
 */
function onRequest(req, res) {
  const url = req.url;

  res.statusCode = 200;

  res.setHeader('Content-Type', 'application/json');

  switch (url) {
    case '/':
      return res.end(JSON.stringify({ message: 'Hello World' }));
    case '/about':
      return res.end(JSON.stringify({ message: 'About' }));
    case '/contact':
      return res.end(JSON.stringify({ message: 'Contact' }));
    default:
      return res.end(JSON.stringify({ message: 'Not Found' }));
  }
}

const server = createServer(onRequest);

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
