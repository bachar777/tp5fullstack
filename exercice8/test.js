const http = require('http');
const PORT = process.argv[2];
const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <title>Mon message</title>
                </head>
                <body>
                    <h1>Titre de la page</h1>
                    
                    
                    <footer>© 2025 Votre Nom</footer>
                </body>
                </html>
            `);
});
server.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}...`);
});
