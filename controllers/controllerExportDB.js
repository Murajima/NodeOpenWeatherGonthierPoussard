var fs = require('fs');
var Favoris = require('./controllerFavoris.js')
var Historique = require('./controllerHistorique.js')

function exportFavoris (result) {
  let json = JSON.stringify(result)
  fs.writeFileSync('./utils/Favoris.json', json, 'utf8')
}

function exportHistorique (result) {
  return new Promise ((resolve, reject) => {
    let json = JSON.stringify(result)
    fs.writeFileSync('./utils/Ville.json', json, 'utf8')
    resolve("History exported")
  })
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
      exportHistorique(result).then((result) => {
        console.log(result)
        process.exit()
      })
    })
  })


}

module.exports = { exportDB }