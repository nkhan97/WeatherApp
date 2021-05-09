const apikey = "37fb550a4f70c2d32e04c6ae0887ad2d"
const cityName = document.querySelector('.cityName')
const searchBtn = document.querySelector('.search')
const form = document.querySelector('#form')
const main = document.querySelector('.name')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const feelsLike = document.querySelector('.feels-like')
const minMax = document.querySelector('.minMax-temp')
const icon = document.querySelector('.icon')


searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let user = cityName.value;
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" +user+ "&appid="+apikey+"&units=metric")
    .then(response => response.json())
    .then(data => {
      var tempValue = data.main.temp;
      var descValue = data.weather[0].description;
      var feelsLikesValue = data.main.feels_like;
      var maxTempValue = data.main.temp_max;
      var minTempValue = data.main.temp_min;
      var iconValue = data.weather[0].icon;
      var imageURLs = 'https://openweathermap.org/img/wn/' + iconValue + '@2x.png'

      temp.innerHTML = tempValue+"°C";
      desc.innerHTML = descValue;
      feelsLike.innerHTML = "Feels Like: "+feelsLikesValue+"°C";
      minMax.innerHTML = minTempValue+"°C (min) / "+maxTempValue+"°C (max)";
      main.innerHTML = cityName.value;
      icon.innerHTML = "<img src='"+imageURLs+"' alt='weather-icon'>";
    })
    .catch(err => console.log(err))
})
