//get elements
const countryName = document.getElementById("place");
const nameOfPlaces = document.getElementById("local-places");
const latitudeOfPlace = document.getElementById("latitude");
const longitudeOfPlace = document.getElementById("longitude");
const weatherOfPlace = document.getElementById("weather");
const idNav = document.getElementById("navy");
const imagePic = document.getElementById("img");
const myDiv = document.getElementById("myDiv");

//fetching data
fetch("http://localhost:3000/climate/2813028")
  .then((res) => res.json())
  .then((region) => {
    countryName.textContent = region.description;
    nameOfPlaces.textContent = region.region;
    document.body.style.color = "red";
  })
  .catch((error) => console.error(error));

//creating new buttons
fetch("http://localhost:3000/climate")
  .then((response) => response.json())
  .then((climate) => {
   for (let i = 0; i < 7; i++){
      const button = document.createElement("button");
      button.classList.add("climate", "item");
      button.textContent = climate[i].name;
      button.addEventListener("click", () => displayClimate(climate[i]));
      idNav.appendChild(button);
    };
  })
  .catch((error) => console.error(error));

//displaying weather data
function displayClimate(climate) {
  countryName.textContent = climate.country;
  nameOfPlaces.textContent = climate.name;
  latitudeOfPlace.textContent =  `Latitude: ${climate.lat}`;
  longitudeOfPlace.textContent = `Longitude: ${climate.lon} `;
  weatherOfPlace.textContent = `Temperature: ${climate.temp}°C |Humidity: ${climate.humidity}% | Precipitation: <${climate.precipitation}%`;
  document.body.style.backgroundImage = `url(${climate.image})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.color = "UE Red";
}
