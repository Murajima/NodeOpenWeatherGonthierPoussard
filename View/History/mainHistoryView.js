const Ville = require('../../controllers/controllerHistorique.js')
const Show = require('./showHistoryView.js')
const Del = require('./delHistoryView.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  switch(answers.choixHist) {
    case "Supprimer l'historique":
        Del.display()
        break;
    case "Afficher l'historique":
        Show.display()
        break;
    default:
        break;
  }
}

function display() {
  inquirer.prompt([{
    type: "list",
    name: "choixHist",
    message: "Que voulez vous faire ?",
    choices: [
      "Supprimer l'historique",
      "Afficher l'historique",
     ]
    }]).then((answers) => processAnswers(answers))
}

module.exports = { display }
