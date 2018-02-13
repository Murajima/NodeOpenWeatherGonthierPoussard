const Models = require('../models/models.js')
const db = require('../db.js')

function addFav (fav) {
  InsertInto(fav).then((result) => {
    console.log(result)
  })
}

function showFav () {
    getFav().then((result) => {
        console.log(result)
    })
}

function getFav () {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM `favoris`", { type: db.QueryTypes.SELECT}).then(favoris => {
            resolve(favoris)
        })
    })
}

function InsertInto(fav) {
    return new Promise((resolve,reject) => {
        Models.Favoris.create({
            Ville: fav
        }).then(() => {
            resolve("data saved")
        })
    })
}

module.exports = {addFav, showFav}
