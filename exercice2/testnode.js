
const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log("Reading file...");
    if (err) {
        console.error('Erreur de lecture :', err);
        return;
    }
    console.log('Contenu du fichier :', data)
});

