import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    date: "Monday May 24 - 22:00",
    city: "Toronto",
    description: "cloudy",
    temperature: 15,
    imgUrl: "http://openweathermap.org/img/wn/01n@2x.png",
    humidity: 50,
    wind: 0,
  };

  return (
    <div>
      <div className="container">
        <div className="weatherApp">
          <div className="row">
            <div className="col-4">
              <div className="dateAndTime">
                <p className="date">{weatherData.date}</p>
              </div>
            </div>
            <div className="col-8">
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Enter a city!"
                  size="30"
                  autofocus="on"
                  autocomplete="off"
                  className="city-input"
                />
                <input type="submit" className="search" value="Search" />
              </form>
            </div>
          </div>
          <h1 className="showCity">{weatherData.city}</h1>
          <button className="localWeather">Local Weather</button>
          <br />
          <br />
          <section className="mainSection">
            <div className="row align-items-center">
              <div className="col-2">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="clear"
                  id="icon"
                  className="imageIcon"
                />
              </div>
              <div className="col-2">
                <li className="nowDescription">{weatherData.description}</li>
              </div>
              <div className="col d-flex">
                <h1 className="temperature">{weatherData.temperature}</h1>
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
        <a href="https://github.com/shellyst/weather-react-app" targe="_blank">
          open-sourced
        </a>{" "}
        on Git-hub.
      </p>
    </div>
  );
}
