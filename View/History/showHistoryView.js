const Historique = require('../../controllers/controllerHistorique.js')

function display() {
  Historique.showHistory()
}

module.exports = { display }
