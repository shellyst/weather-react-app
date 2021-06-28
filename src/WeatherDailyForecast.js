import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherDailyForecast(props) {
  function handleResponse(response) {}
  console.log(props);
  let apiKey = "9ee8642695c7bb9e77c98b6a3388381c";
  let longitude = 40.3;
  let latitude = 70.3;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
