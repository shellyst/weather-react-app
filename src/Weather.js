import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "9ee8642695c7bb9e77c98b6a3388381c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="weatherApp">
            <div className="row">
              <div className="col-4">
                <div className="dateAndTime">
                  <p className="date">
                    <FormattedDate date={weatherData.date} />
                  </p>
                </div>
              </div>
              <div className="col-8">
                <form onSubmit={handleSubmit} className="search-form">
                  <input
                    type="text"
                    placeholder="Enter a city!"
                    size="30"
                    autoFocus="on"
                    onChange={handleCityChange}
                    autoComplete="off"
                    className="city-input"
                  />
                  <input type="submit" className="search" value="Search" />
                </form>
              </div>
            </div>

            <h1 className="showCity">{weatherData.city}</h1>

            <button type="button" className="btn btn-light">
              Local Weather
            </button>
            <br />
            <br />
            <WeatherInfo data={weatherData} />
            <br />
            <div className="weekly-forecast">
              <br />
              <h4>Weekly Forecast</h4>
              <div className="weather-forecast" id="forecast"></div>
              <br />
            </div>
            <br />
          </div>
        </div>
        <p className="text-center">
          This project was created by Michelle Stone and is{" "}
          <a
            href="https://github.com/shellyst/weather-react-app"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on Git-hub.
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
