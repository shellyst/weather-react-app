import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherDailyForecast() {
  return (
    <div className="WeatherDailyForecast">
      <h4>Weekly Forecast</h4>
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast" id="forecast"></div>
          <div className="weather-forecast-date">Thu</div>
          <WeatherIcon code="01d" size={32} />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temperature-maximum">19</span> |{" "}
            <span className="weather-forecast-temperature-minimum">10</span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
