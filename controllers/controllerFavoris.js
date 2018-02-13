const Models = require('../models/models.js')
const db = require('../db.js')

function addFav(fav){
  InsertInto(fav).then((result)=>{
    console.log(result)
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

module.exports = {addFav}
