const Favoris = require('../../controllers/controllerFavoris.js')
const Ville = require('../../controllers/controllerVille.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  if( answers.choixFav === "Exit"){
    process.exit()
  } else {
    Ville.getWeather(answers.choixFav)
    process.exit()
  }
}

function listFav () {
  returnList = []
  return new Promise ((resolve, reject) => {
    Favoris.getFav().then((result) => {
      result.forEach(function(element) {
        returnList.push(element.Ville)
      })
      returnList.push("Exit")
      resolve(returnList)
    })
  })
}

function display() {
  listFav().then((result) => {
    inquirer.prompt([{
      type: "list",
      name: "choixFav",
      message: "Liste des Favoris :",
      choices: result
    }]).then((answers) => processAnswers(answers))
  })
}

module.exports = { display }


