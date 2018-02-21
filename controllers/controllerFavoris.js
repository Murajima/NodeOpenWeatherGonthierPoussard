const Models = require('../models/models.js')
const db = require('../db.js')

function addFav (fav) {
  InsertInto(fav).then((result) => {
    console.log(result)
    process.exit()
  })
}

function showFav () {
    getFav().then((result) => {
        console.log(result)
    })
}

function delFav (fav) {
    DeleteFav(fav).then((result) => {
        console.log(result)
        process.exit()
    })
}

function getFav () {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM `favoris`", { type: db.QueryTypes.SELECT}).then(favoris => {
            resolve(favoris)
        })
    })
}

function InsertInto (fav) {
    return new Promise((resolve,reject) => {
        Models.Favoris.create({
            Ville: fav
        }).then(() => {
            resolve("data saved")
        })
    })
}

function DeleteFav (fav) {
    return new Promise((resolve,reject) => {
        Models.Favoris.destroy({
            where: {
                Ville: fav
            }
        }).then(() => {
            resolve("data deleted")
        })
    })
}

module.exports = {addFav, showFav, delFav, getFav}
