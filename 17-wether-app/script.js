const search = document.getElementById('search');
const searchBtn = document.getElementById('searchbtn');
const temp = document.getElementById('temp');
const cityName = document.getElementById('cityname');
const windspeed = document.getElementById('windspeed');
const cloud = document.getElementById('cloud');
const humanity = document.getElementById('humanity');
const forecast = document.getElementById('forecast');

let city = 'Ahmedabad';

const getData = async () => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    temp.innerText = data.main.temp + '°C';
    windspeed.innerText = `Windspeed: ${data.wind.speed} m/s`;
    humanity.innerText = `Humidity: ${data.main.humidity}%`;
    cloud.innerText = data.weather[0].description;
    cityName.innerText = data.name;

    // Call forecast function here
    getForecastData();
  } catch (error) {
    console.log("Error fetching current weather:", error);
  }
};

const getForecastData = async () => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=35b1f1d45a7b4378cf2430ae601816be&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    forecast.innerHTML = ''; // Clear old forecast

    // Filter 12 PM data for next 5 days
    let dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    dailyData.slice(0, 5).forEach(day => {
      let date = new Date(day.dt_txt);
      let dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      let temp = Math.round(day.main.temp);
      let icon = day.weather[0].icon;
      let description = day.weather[0].main;

      forecast.innerHTML += `
        <div class="days">
          <p><strong>${dayName}</strong></p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
          <p>${temp}°C</p>
          <p>${description}</p>
        </div>
      `;
    });
  } catch (error) {
    console.log("Error fetching forecast:", error);
  }
};

searchBtn.addEventListener('click', () => {
  city = search.value;
  getData();
});

// Load default city
getData();
