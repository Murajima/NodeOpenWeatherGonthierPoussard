const Historique = require('../../controllers/controllerHistorique.js')
const inquirer = require('inquirer')
const joi = require('joi')

function display(){
  Historique.delHistory()
}

module.exports = { display }
