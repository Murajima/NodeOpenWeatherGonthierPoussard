const Ville = require('../controllers/controllerVille.js')
const inquirer = require('inquirer')
const joi = require('joi')

function processAnswers(answers){
  Ville.getWeather(answers.ville)
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
    message: "De quelle ville souhaitez vous la météo ?",
    type: "input",
    name: "ville",
    validate: validateVille,
  }]).then((answers) => processAnswers(answers))
}

module.exports = { display }


