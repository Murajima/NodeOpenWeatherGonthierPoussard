var fs = require('fs');
var Favoris = require('./controllerFavoris.js')
var Historique = require('./controllerHistorique.js')

function exportFavoris (result) {
  let json = JSON.stringify(result)
  fs.writeFile('./utils/Favoris.json', json, 'utf8')
}

function exportHistorique (result) {
  let json = JSON.stringify(result)
  fs.writeFile('./utils/Ville.json', json, 'utf8')
}

function getFav () {
  return new Promise((resolve, reject) => {
    Favoris.getFav().then((result) => {
      exportFavoris(result)
      resolve("Favoris exported")
    })
  })
}

function exportDB () {
  let a = 0
  getFav().then((result) => {
    console.log(result)
    Historique.getHistory().then((result) => {
      exportHistorique(result)
      console.log("History exported")
      process.exit()
    })
  })


}

module.exports = { exportDB }