#!/usr/bin/env node
const Weather = require('./controllers/controllerVille.js')
const Favoris = require('./controllers/controllerFavoris.js')
const program = require('commander')
const inquirer = require('inquirer')
const { exec } = require('child_process')

// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-f, --favori', 'Show favori')
 .option('-h, --historique', 'Show historique')
 .option('-v, --ville [name]', 'Search ville')
 .option('-a, --addFav [fav]', 'Add a favorite city')
// On parse (convertit en format utilisable) les options
// fonction synchrone
program.parse(process.argv)
// Maintenant on peut les utiliser
if (program.favori) {
 console.log('Hello world!')
} else if (program.historique) {
 console.log('Hello all!')
} else if (program.ville) {
 Weather.getWeather(program.ville)
} else if (program.addFav) {
	Favoris.addFav(program.addFav)
} else {
 program.help()
}
