const Favoris = require('../../controllers/controllerFavoris.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  if (answers.choixFav === "Exit") {
    process.exit()
  } else {
    Favoris.delFav(answers.choixFav)
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
      message: "Quel favori voulez vous supprimer ?",
      choices: result
    }]).then((answers) => processAnswers(answers))
  })
}

module.exports = { display }
