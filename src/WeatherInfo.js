import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <section className="mainSection">
        <div className="row align-items-center">
          <div className="col-2">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="imageIcon"
            />
          </div>
          <div className="col-2">
            <li className="nowDescription">{props.data.description}</li>
          </div>
          <div className="col d-flex">
            <h1 className="temperature">
              {Math.round(props.data.temperature)}
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
