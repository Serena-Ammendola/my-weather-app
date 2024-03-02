function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let weatherCity = document.querySelector("#weather-city");
  weatherCity.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", enterCity);
