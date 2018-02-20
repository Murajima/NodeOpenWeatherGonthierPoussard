const Favoris = require('../../controllers/controllerFavoris.js')

function display() {
  Favoris.showFav()
}

module.exports = { display }


