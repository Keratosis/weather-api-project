   // Define a function to handle the weather data retrieved from the API
   function handleWeatherData(data) {
    // Extract the relevant data from the API response
    const temperature = data.current.temperature;
    const weatherIcon = data.current.weather_icons[0];
    const weatherDescription = data.current.weather_descriptions[0];
    const locationName = data.location.name;
    const countryName = data.location.country;
    const windSpeed = data.current.wind_speed;
    const windDegree = data.current.wind_degree;
    const windDirection = data.current.wind_dir;
    const pressure = data.current.pressure;
    const precipitation = data.current.precip;
    const humidity = data.current.humidity;
    const cloudCover = data.current.cloudcover;
    const feelsLike = data.current.feelslike;
    const uvIndex = data.current.uv_index;
    const visibility = data.current.visibility;
    const isDay = data.current.is_day;
  
    
    // Update the HTML on the page to display the weather data
    const weatherDataElement = document.getElementById("weatherData");
    weatherDataElement.innerHTML =
      "<h2>" +
      locationName +
      ", " +
      countryName +
      "</h2>" +
      "<img src='" +
      weatherIcon +
      "'>" +
      "<p>" +
      temperature +
      "°C - " +
      weatherDescription +
      "</p>" +
      "<p>Wind Speed: " +
      windSpeed +
      " mph</p>" +
      "<p>Wind Degree: " +
      windDegree +
      "</p>" +
      "<p>Wind Direction: " +
      windDirection +
      "</p>" +
      "<p>Pressure: " +
      pressure +
      " mb</p>" +
      "<p>Precipitation: " +
      precipitation +
      " mm</p>" +
      "<p>Humidity: " +
      humidity +
      "%</p>" +
      "<p>Cloud Cover: " +
      cloudCover +
      "%</p>" +
      "<p>Feels Like: " +
      feelsLike +
      "°C</p>" +
      "<p>UV Index: " +
      uvIndex +
      "</p>" +
      "<p>Visibility: " +
      visibility +
      " miles</p>" +
      "<p>Is Day: " +
      (isDay === "yes" ? "Yes" : "No") +
      "</p>";
      weatherDataElement.style.display = "block";
  
  }
  
  // Define a function to get the weather data from the API
  function getWeather() {
    // Get the user's location input from the HTML input element
    const location = document.getElementById("locationInput").value;
    
    // Construct the API URL with the user's location input and API access key
    const apiUrl =
      "http://api.weatherstack.com/current?access_key=248cb588c338eb37da4aee9554ad258c&query=" +
      location +
      "&callback=handleWeatherData";
  
    // Create a new script element with the API URL as the source
    const script = document.createElement("script");
    script.src = apiUrl;
    
    // Append the new script element to the HTML head element to execute the API call
    document.head.appendChild(script);
  
    //selecting  element
    const button = document.querySelector('#getWeatherButton');
  
    //adding event listener
    button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'crimson';
  });
  weatherData.addEventListener("mouseover", () => {
    weatherData.style.backgroundImage = "url('https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
    weatherData.style.backgroundSize = "cover";
    weatherData.style.backgroundRepeat = "no-repeat";
  });
  
  weatherData.addEventListener('mouseout', () => {
    weatherData.style.backgroundImage = "url('https://images.unsplash.com/photo-1563119275-f52fb8306d87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHx3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
  });
  
  }