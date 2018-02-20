const Favoris = require('../../controllers/controllerFavoris.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  Favoris.delFav(answers.choixFav)
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

function listFav () {
  returnList = []
  return new Promise ((resolve, reject) => {
    Favoris.getFav().then((result) => {
      result.forEach(function(element) {
        returnList.push(element.Ville)
      })
      resolve(returnList)
    })
  })
}

function display() {
  listFav().then((result) => {
    inquirer.prompt([{
      type: "list",
      name: "choixFav",
      message: "Quel favori voulez vous supprimer ?",
      choices: result
    }]).then((answers) => processAnswers(answers))
  })
}

module.exports = { display }


