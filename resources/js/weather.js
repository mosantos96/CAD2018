const axios = require('axios')
const moment = require('moment')
var lastUpdated = null
var intervalVar = null
var timeStamp = null

function updateTimestamp () {
  var now = moment()
  //var duration = moment.duration(now.diff(lastUpdated))
  var hours = null
  var minutes = null

/*  var timeStamp = ''

  if (duration._data.hours !== 0) {
    hours = duration._data.hours
    if (hours === 1) {
      timeStamp = hours + ' hour ago'
    } else {
      timeStamp = hours + ' hours ago'
    }
  } else if (duration._data.minutes !== 0) {
    minutes = duration._data.minutes
    if (minutes === 1) {
      timeStamp = minutes + ' minute ago'
    } else {
      timeStamp = minutes + ' minutes ago'
    }
  } else {
    timeStamp = 'a few seconds ago'
  }*/

  //console.log(duration)
  console.log(timeStamp)
  document.getElementById('timeStamp').textContent = timeStamp
}

function updateUI (data) {
  console.log('Refresh')
  intervalVar = setInterval(updateTimestamp, 60000)

  var windSpeed = (data.wind.speed * 3,6)

  var sunrise = moment.unix(data.sys.sunrise).format('HH:mm:ss')
  var sunset = moment.unix(data.sys.sunset).format('HH:mm:ss')
  lastUpdated = moment()
  timeStamp = moment().fromNow();

  console.log(moment())
  document.getElementById('temperature').textContent = data.main.temp + ' ºC'
  document.getElementById('minTemperature').textContent = data.main.temp_min + ' ºC'
  document.getElementById('maxTemperature').textContent = data.main.temp_max + ' ºC'
  document.getElementById('humidity').textContent = data.main.humidity + ' %'
  document.getElementById('wind').textContent = windSpeed + ' Km/h (' + data.wind.deg + 'º)'
  document.getElementById('dailyForecast').textContent = data.weather[0].main + '(' + data.weather[0].description + ')'
  document.getElementById('pressure').textContent = data.main.pressure + ' hPa'
  document.getElementById('sunriseTime').textContent = sunrise
  document.getElementById('sunsetTime').textContent = sunset
  document.getElementById('timeStamp').textContent = timeStamp
}

function refreshWeatherBox () {
  axios.get('http://api.openweathermap.org/data/2.5/weather?id=8012366&APPID=18f09cc1b414bd6902c598f33b3965df&units=metric')
    .then(function (response) {
      updateUI(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

//var refreshButton = document.querySelector('.refresh')
//refreshButton.addEventListener('click', refreshWeatherBox)
