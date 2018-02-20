const Models = require('../models/models.js')
const db = require('../db.js')

function showHistory () {
    getHistory().then((result) => {
        result.forEach(function(element) {
            display(element)
        })
        process.exit()
    })
}

function display(result) {
  console.log(result.Nom + ' / ' + result.Pays)
  console.log('   longitude:         ' + result.Longitude)
  console.log('   latitude:          ' + result.Latitude)
  console.log('   main:              ' + result.Temps)
  console.log('   description:       ' + result.TempsDesc)
  console.log('   température:       ' + result.Temperature)
  console.log('   vitesse du vent:   ' + result.Vent)
  console.log('   Date de recherche: ' + result.createdAt)
  console.log('--------------------------------------------------------------------')
}

function getHistory () {
    return new Promise((resolve, reject) =>{
        db.query("SELECT * FROM `historiques`", { type: db.QueryTypes.SELECT}).then(historiques => {
            resolve(historiques)
        })
    })
}

function delHistory() {
    DeleteHist().then((result) => {
            console.log(result)
    })
}

function DeleteHist () {
    return new Promise((resolve,reject) => {
        Models.Historique.destroy({
                    where: {},
                truncate: true
        }).then(() => {
            resolve("data deleted")
        })
    })
}

module.exports = { showHistory, delHistory, getHistory }
