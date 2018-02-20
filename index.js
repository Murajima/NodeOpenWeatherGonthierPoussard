#!/usr/bin/env node
const Historique = require('./controllers/controllerHistorique.js')
const Favoris = require('./controllers/controllerFavoris.js')
const DisplayHist = require('./View/History/mainHistoryView.js')
const DisplayAddFav = require('./View/Favoris/mainFavView.js')
const DisplayVille = require('./View/searchVilleView.js')
const program = require('commander')
const { exec } = require('child_process')


// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-f, --favori', 'Show favori')
 .option('-h, --historique', 'Show historique')
 .option('-v, --ville', 'Search ville')
 .option('-a, --addFav', 'Add a favorite city')
// On parse (convertit en format utilisable) les options
// fonction synchrone
program.parse(process.argv)
// Maintenant on peut les utiliser
if (program.favori) {
	Favoris.showFav()
} else if (program.historique) {
	DisplayHist.display()
} else if (program.ville) {
	DisplayVille.display()
} else if (program.addFav) {
  DisplayAddFav.display()
} else {
	program.help()
}
