import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
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
                <form className="search-form">
                  <input
                    type="text"
                    placeholder="Enter a city!"
                    size="30"
                    autoFocus="on"
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
            <section className="mainSection">
              <div className="row align-items-center">
                <div className="col-2">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="imageIcon"
                  />
                </div>
                <div className="col-2">
                  <li className="nowDescription">{weatherData.description}</li>
                </div>
                <div className="col d-flex">
                  <h1 className="temperature">
                    {Math.round(weatherData.temperature)}
                  </h1>
                  <span className="temperature-units">
                    <span className="degree">º</span>
                    <span className="unit">C</span>
                  </span>
                </div>
                <div className="col">
                  <ul>
                    <li>
                      <strong>HUMIDITY:</strong>{" "}
                      <span className="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      <strong>WIND:</strong>{" "}
                      <span className="windSpeed">{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </section>
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
          This project is created by Michelle Stone and is{" "}
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
    const apiKey = "9ee8642695c7bb9e77c98b6a3388381c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
