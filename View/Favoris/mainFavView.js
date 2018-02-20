const Ville = require('../../controllers/controllerFavoris.js')
const Show = require('./showFavView.js')
const Add = require('./addFavView.js')
const Del = require('./delFavView.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  switch(answers.choixFav) {
    case "Ajouter un Favori":
        Add.display()
        break;
    case "Supprimer un Favori":
        Del.display()
        break;
    case "Afficher les Favoris":
        Show.display()
        break;
    default:
        break;
  }
}

function toto () {
  console.log('toto')
}

function display () {
  inquirer.prompt([{
    type: "list",
    name: "choixFav",
    message: "Que voulez vous faire ?",
    choices: [
      "Ajouter un Favori",
      "Supprimer un Favori",
      "Afficher les Favoris",
     ]
    }]).then((answers) => processAnswers(answers))
}

module.exports = { display, toto }