const http = require('http');
const PORT = 4000;
const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bonjour depuis le serveur Node.js !');
});
server.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}...`);
});
