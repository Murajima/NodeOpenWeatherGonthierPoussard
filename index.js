#!/usr/bin/env node
const Weather = require('./controllers/controllerVille.js')
const Favoris = require('./controllers/controllerFavoris.js')
const Historique = require('./controllers/controllerHistorique.js')
const program = require('commander')
const inquirer = require('inquirer')
const { exec } = require('child_process')
var joi = require('joi')

// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-f, --favori', 'Show favori')
 .option('-h, --historique', 'Show historique')
 .option('-v, --ville [name]', 'Search ville')
 .option('-a, --addFav', 'Add a favorite city')
// On parse (convertit en format utilisable) les options
// fonction synchrone
program.parse(process.argv)
// Maintenant on peut les utiliser
if (program.favori) {
	Favoris.showFav()
} else if (program.historique) {
	Historique.showHistory()
} else if (program.ville) {
	Weather.getWeather(program.ville)
} else if (program.addFav) {
  function processAnswers(answers){
    Favoris.addFav(answers.ville)
  }

  function validateVille(ville) {
    var valid
    joi.validate(ville, joi.string().required(), function(err,val) {
       if (err) {
         console.log(err.message)
         valid = err.message
       }
       else {
         valid = true
       }
   })
   return valid
 }
 
  inquirer.prompt([{
      message: "Quel ville souhaitez vous ajouter a vos favoris ?",
      type: "input",
      name: "ville",
      validate: validateVille,
  }]).then((answers) => processAnswers(answers))




} else {
	program.help()
}
