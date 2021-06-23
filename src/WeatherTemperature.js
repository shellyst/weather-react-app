import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="col d-flex">
          <h1 className="temperature">{Math.round(props.celsius)}</h1>
          <span className="temperature-units">
            <span className="degree">º</span>
            <span className="unit">C</span>|{" "}
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="col d-flex">
          <h1 className="temperature">{Math.round(fahrenheit)}</h1>
          <span className="temperature-units">
            <span className="degree">º</span>
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            | ºF
          </span>
        </div>
      </div>
    );
  }
}
