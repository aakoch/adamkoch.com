// Include the server in your file
const server = require('server');
const { get, post } = server.router;

// Handle requests to the url "/" ( http://localhost:3000/ )
server({ port: 8080 }, [
  get('/', ctx => 'Hello world!')
]);