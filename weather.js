const API_KEY = "125b7ad059dbbc972a986e41f9a73700";
const spanWeather = document.querySelector(".js-weather");
const spanPlace = document.querySelector(".js-place");
const header = document.querySelector("header");
const COORDS_LS = "COORDS";

function paintWeather() {}

function getWeather(lat, lon) {
  const URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URI)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const icon = `src/${json.weather[0].icon}@2x.png`;
      // console.log(`./src/${json.weather[0].icon}@2x.png`);
      const img = document.createElement("img");
      const temperature = json.main.temp;
      const place = json.name;
      img.setAttribute("src", icon);
      header.insertBefore(img, header.firstChild);
      spanWeather.innerText = `${temperature}°`;
      spanPlace.innerText = place;
    });
}

function handleGeoSuccess(e) {
  const latitude = e.coords.latitude;
  const longitude = e.coords.longitude;
  const coords = JSON.stringify({ latitude, longitude });
  localStorage.setItem(COORDS_LS, coords);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords(lat, lon) {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadGeoLocation() {
  const loadedCoords = localStorage.getItem(COORDS_LS);
  if (loadedCoords) {
    parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  } else {
    askForCoords();
  }
}

function init() {
  loadGeoLocation();
}

init();
