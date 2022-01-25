import React from "react";

const DailyWeather = ({ weatherData }) => {
  console.log("weatherDataChild", weatherData);
  return (
    <div>
      {Object.keys(weatherData).length > 0 && (
        <div className="boxStyles contentBox">
          <div className="content-left">
            <h1 className="weathorCity">{weatherData.city.name}</h1>
            <div className="content-temperature">
            <p className="content-temperature__max">{weatherData?.list[0]?.main.temp_max}°C&nbsp;|</p>
            <p className="content-temperature__min">{weatherData?.list[0]?.main.temp_min}°C</p>
            </div>
            <img className="weatherImg"
              src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
            />
            <p className="content-temperature__desc">{weatherData.list[0].weather[0].description}</p>
          </div>

          <div className="content-right">
            <h1>Daily</h1>
            <h1> {weatherData?.list[0]?.main.temp}°C</h1>
            <p>humidity : {weatherData?.list[0]?.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
