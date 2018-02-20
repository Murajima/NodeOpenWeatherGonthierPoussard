#!/usr/bin/env node
const Historique = require('./controllers/controllerHistorique.js')
const Favoris = require('./controllers/controllerFavoris.js')
const DisplayHist = require('./View/History/mainHistoryView.js')
const DisplayFav = require('./View/Favoris/mainFavView.js')
const DisplayVille = require('./View/searchVilleView.js')
const program = require('commander')
const { exec } = require('child_process')


// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-f, --favori', 'Show favori')
 .option('-h, --historique', 'Show historique')
 .option('-v, --ville', 'Search ville')
// On parse (convertit en format utilisable) les options
// fonction synchrone
program.parse(process.argv)
// Maintenant on peut les utiliser
if (program.favori) {
	DisplayFav.display()
} else if (program.historique) {
	DisplayHist.display()
} else if (program.ville) {
	DisplayVille.display()
} else {
	program.help()
}
