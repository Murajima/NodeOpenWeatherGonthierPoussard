const request = require('request')
const Models = require('../models/models.js')
const db = require('../db.js')

function getWeather(ville){
  apiCall(ville).then((result)=>{
    console.log(result)
    InsertInto(result).then((result) =>{
      console.log(result)
    })
  })
}

function apiCall(ville){
  return new Promise((resolve,reject) => {
    var dict = {}
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + ville +'&APPID=8754001be4624878ec1c248f4d18e261'
    request(url,function(err, res, body){
      var jsonObj = JSON.parse(body);
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
