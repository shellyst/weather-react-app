import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <section className="mainSection">
        <div className="row align-items-center">
          <div className="col-2">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="col-2">
            <li className="nowDescription">{props.data.description}</li>
          </div>
          <div className="col d-flex">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col">
            <ul>
              <li>
                <strong>HUMIDITY:</strong>{" "}
                <span className="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                <strong>WIND:</strong>{" "}
                <span className="windSpeed">{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
