const request = require('request')

function getWeather(ville){
  apiCall(ville).then((result)=>{
    console.log(result)
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
module.exports = {getWeather}
