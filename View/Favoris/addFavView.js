const Favoris = require('../../controllers/controllerFavoris.js')
const DisplayAddFav = require('./mainFavView.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  Favoris.addFav(answers.ville)
  process.exit()
}

function validateVille(ville) {
  let valid
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

function display() {
  inquirer.prompt([{
    message: "Quel ville souhaitez vous ajouter a vos favoris ?",
    type: "input",
    name: "ville",
    validate: validateVille,
  }]).then((answers) => processAnswers(answers))
}

module.exports = { display }


