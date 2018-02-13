const db = require('../db')
const Sequelize = require('sequelize')

const Favoris = db.define('favoris', {
	Ville: {
		type: Sequelize.STRING
	}
})

const Historique = db.define('historique', {
	Nom: {
		type: Sequelize.STRING
	},
	Pays: {
		type: Sequelize.STRING
	},
	Latitude: {
		type: Sequelize.STRING
	},
	Longitude: {
		type: Sequelize.STRING
	},
	Temps: {
		type: Sequelize.STRING
	},
	TempsDesc: {
		type: Sequelize.STRING
	},
	Temperature: {
		type: Sequelize.STRING
	},
	Vent: {
		type: Sequelize.STRING
	}
})

Favoris.sync()
Historique.sync()

module.exports = {Favoris, Historique}