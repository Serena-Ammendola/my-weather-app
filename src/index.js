function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let weatherCityElement = document.querySelector("#weather-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  weatherCityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "THursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "dec30ab936f6fe43ot4b0dead25ade10";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Dublin");
