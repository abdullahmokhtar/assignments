const submitBtn = document.getElementById("submit");
const searchElement = document.getElementById("search");
const weatherCardsElement = document.getElementById("weather-Cards");

const fetchData = async (city = "Cairo") => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4875d18202c04fb6a20114946230308&q=${city}&days=3`
  );

  if (response.ok) {
    const responseData = await response.json();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date(responseData.location.localtime);
    let weatherData = `<div class="p-0 pb-4 col-md-4">
            <div class="weather-card text-white">
              <div class="card-heading d-flex justify-content-between rounded-2">
                <p>${weekday[d.getDay()]}</p>
                <p>${d.getDate()} ${month[d.getMonth()]}</p>
              </div>
              <div class="card-content p-3">
                <p>${responseData.location.name}</p>
                <h4>${responseData.current.temp_c}<sup>o</sup>C</h4>
                <img src="${responseData.current.condition.icon}"/>
                <h6>${responseData.current.condition.text}"</h6>
              </div>
              <div class="card-footer text-center">
              <span><img src="../images/icon-umberella.png"/> ${
                responseData.current.wind_degree
              }%</span>
              <span><img src="../images/icon-wind.png"/> ${
                responseData.current.wind_kph
              }%</span>
              <span><img src="../images/icon-compass.png"/> ${
                responseData.current.wind_dir
              }%</span>
              </div>
            </div>
          </div>
    `;
    for (let i = 1; i < responseData.forecast.forecastday.length; i++) {
      const da = new Date(responseData.forecast.forecastday[i].date);
      weatherData += `<div class="col-md-4 p-0">
            <div class="weather-card">
              <div class="card-heading d-flex justify-content-between">
                <p>${weekday[da.getDay()]}</p>
                <p>${da.getDate()} ${month[da.getMonth()]}</p>
              </div>
              <div class="card-content text-center text-white">
              <img class="mt-5"  src="${
                responseData.forecast.forecastday[i].day.condition.icon
              }" />
                <h4 class="fw-bold">${
                  responseData.forecast.forecastday[i].day.maxtemp_c
                }<sup>o</sup>C</h4>
                <h4 class="fw-bold">${
                  responseData.forecast.forecastday[i].day.mintemp_c
                }<sup>o</sup>C</h4>
                <h6 class="mt-3">${
                  responseData.forecast.forecastday[i].day.condition.text
                }</h6>
              </div>
            </div>
          </div>
    `;
    }
    weatherCardsElement.innerHTML = weatherData;
  }
};

searchElement.addEventListener("keydown", (e) => {
  fetchData(searchElement.value);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});

fetchData();
