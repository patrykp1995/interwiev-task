import React from "react";

const AllDayWeather = (weatherData) => {
  console.log("AllDay", weatherData);
  const allDayWeather = weatherData.weatherData;
  let today = new Date();

  let todayConvert =  new Date(today.getTime() - today.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0]
  return (
    <div >
      {Object.keys(allDayWeather).length > 0 && (
        <div className="allDayWeather">
          {allDayWeather.list.map((day, key) => {
            if (day.dt_txt.includes(todayConvert)) {
              return (
                <div className="allDayWeather-hour" key={key}>
                   <img
                        className="weatherImg"
                        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                        alt="weatherIcon"
                      />
                  <h1 className="weathorTemp">{day.main.temp}°C</h1>
                  <h3>{day.dt_txt.slice(10, 16)}</h3>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default AllDayWeather;
