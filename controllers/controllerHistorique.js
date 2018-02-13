const Models = require('../models/models.js')
const db = require('../db.js')

function showHistory () {
	getHistory().then((result) => {
		console.log(result)
	})
}

function getHistory () {
	return new Promise((resolve, reject) =>{
		db.query("SELECT * FROM `historiques`", { type: db.QueryTypes.SELECT}).then(historiques => {
            resolve(historiques)
        })
	})
}

module.exports = {showHistory}