#!/usr/bin/env node --no-deprecation --no-warnings
const Import = require('./controllers/controllerImportDB.js')
const Historique = require('./controllers/controllerHistorique.js')
const Favoris = require('./controllers/controllerFavoris.js')
const Export = require('./controllers/controllerExportDB.js')
const DisplayHist = require('./View/History/mainHistoryView.js')
const DisplayFav = require('./View/Favoris/mainFavView.js')
const DisplayVille = require('./View/searchVilleView.js')
const program = require('commander')
const { exec } = require('child_process')

console.clear()


// // La on recode la fonction clear comme des génies
// var lines = process.stdout.getWindowSize()[1];
// for(var i = 0; i < lines; i++) {
//     console.log('\r\n');
// }

// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-f, --favori', 'Show favori')
 .option('-H, --historique', 'Show historique')
 .option('-v, --ville', 'Search ville')
 .option('-e, --export', 'Export the Database')
 .option('-i, --import', 'Import Database from JSON files')
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
} else if (program.export) {
  Export.exportDB()
} else if (program.import) {
  Import.importDB()
} else {
    program.help()
}


// Commander get arguments:


// program
//  .version(1.0.0)
//  .option('-v, --ville [name]', 'Search ville')

// program.parse(process.argv)
// if (program.ville) {
//  Weather.getWeather(program.ville)
// } else {
//  program.help()
// }
