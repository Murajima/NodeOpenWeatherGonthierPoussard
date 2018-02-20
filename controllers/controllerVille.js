const request = require('request')
const Models = require('../models/models.js')
const db = require('../db.js')

function getWeather(ville){
  apiCall(ville).then((result)=>{
    display(result)
    if (result != null){
        InsertInto(result).then((result) =>{
        process.exit()
      })
    }
  })
}

function display(result) {
  if (result == null) {
    console.log("Il n'existe aucune ville de ce nom")
    process.exit()
  } else {
    console.log(result.name + ' / ' + result.country)
    console.log('   longitude:       ' + result.lon)
    console.log('   latitude:        ' + result.lat)
    console.log('   main:            ' + result.main)
    console.log('   description:     ' + result.description)
    console.log('   température:     ' + result.temp)
    console.log('   vitesse du vent: ' + result.windSpeed)
  }
}

function apiCall(ville){
  return new Promise((resolve,reject) => {
    var dict = {}
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + ville +'&APPID=8754001be4624878ec1c248f4d18e261'
    request(url,function(err, res, body){
      var jsonObj = JSON.parse(body);
      if (jsonObj.cod == '404') {
        resolve()
      } else {
        dict = {
          name: jsonObj.name,
          country: jsonObj.sys.country,
          lon: jsonObj.coord.lon,
          lat: jsonObj.coord.lat,
          main: jsonObj.weather[0].main,
          description: jsonObj.weather[0].description,
          temp: (jsonObj.main.temp - 273.15).toFixed(2)+' °C',
          windSpeed: jsonObj.wind.speed+' km/h',
        }
        resolve(dict)
      }
    })
  })
}

function InsertInto(jsonObj) {
    return new Promise((resolve,reject) => {
        Models.Historique.create({
            Nom: jsonObj.name,
            Pays: jsonObj.country,
            Latitude: jsonObj.lat,
            Longitude: jsonObj.lon,
            Temps: jsonObj.main,
            TempsDesc: jsonObj.description,
            Temperature: jsonObj.temp,
            Vent: jsonObj.windSpeed
        }).then(() => {
            resolve("data saved")
        })
    })
}
module.exports = {getWeather}
