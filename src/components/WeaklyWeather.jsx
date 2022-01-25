import React from "react";

const WeaklyWeather = (weaklyWeatherData) => {
  console.log("weatherDataChildWeak", weaklyWeatherData);
  const weaklyWeather = weaklyWeatherData.weaklyWeatherData;
  return (
    <div className="weaklyContent">
      {Object.keys(weaklyWeather).length > 0 && (
        <>
          <span className="spanFont">
            <strong>Weekly</strong> Weather
          </span>
          <div>
            {weaklyWeather.list.map((day, key) => {
              if (day.dt_txt.includes("15:00")) {
                return (
                  <div className="boxStyles elem contentBox" key={key}>
                    <div className="weaklyLeftContent">
                      <h1>{day.dt_txt.slice(5, 10).replace("-", "/")}</h1>
                      <h3>{day.weather[0].description}</h3>
                      <div className="content-temperature">
                        <p className="content-temperature__max">
                          {day.main.temp_max}°C&nbsp;|
                        </p>
                        <p className="content-temperature__min">
                          {day.main.temp_min}°C
                        </p>
                      </div>
                    </div>
                    <div className="weaklyRightContent">
                      <img
                        className="weatherImg"
                        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                      />
                      <h1 className="weathorTemp">{day.main.temp}°C</h1>
                      <p>humidity : {day.main.humidity}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default WeaklyWeather;
