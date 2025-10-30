const http = require('http');
const fs = require('fs');
const PORT = 8088;

const server = http.createServer((req, res) => {

    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur serveur : impossible de lire le fichier.');
            console.error(err);
        } else {

            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <title>Mon message</title>
                </head>
                <body>
                    <h1>Titre de la page</h1>
                    <p>${data}</p>
                    
                    <footer>© 2025 Votre Nom</footer>
                </body>
                </html>
            `);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
