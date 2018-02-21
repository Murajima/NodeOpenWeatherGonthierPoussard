var fs = require('fs');
var Favoris = require('./controllerFavoris.js')
var Historique = require('./controllerHistorique.js')

function importFavoris () {
  return new Promise ((resolve, reject) => {
    let content = fs.readFileSync("./utils/Favoris.json")
    let json = JSON.parse(content)
    resolve(json)
  })
}

function importHistorique () {
  return new Promise ((resolve, reject) => {
    let content = fs.readFileSync("./utils/Ville.json")
    let json = JSON.parse(content)
    resolve(json)
  })
}

function promiseExit () {
  return new Promise((resolve, reject) => {
    console.log('COUCOU')
    importFavoris().then((result) => {
      result.forEach(function(element) {
        Favoris.InsertInto(element.Ville)
      })
      resolve("Import Favoris done")
    })
  })
}

function insertHistory (json) {
  return new Promise((resolve, reject) => {
    json.forEach(function(element) {
      Historique.InsertInto(element.Nom, element.Pays, element.Latitude, element.Longitude, element.Temps, element.TempsDesc, element.Temperature, element.Vent)
    })
    resolve('Import History done')
  })
}

function importDB () {
  promiseExit().then((result) => {
    console.log(result)
    importHistorique().then((result) => {
      insertHistory(result).then((result) => {
        console.log(result)
        //process.exit() => Il faut attendre que tous les Insert soient termines TODO
      })
    })
  })
}

module.exports = { importDB }