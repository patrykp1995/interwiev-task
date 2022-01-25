import './App.scss';
import SearchBox from './components/SearchBox';
import React from "react";
import { useState } from "react";
import DailyWeather from './components/DailyWeather';
import WeaklyWeather from './components/WeaklyWeather';
import Header from './components/Header';
import { getWetherDetails } from './api/WeatherApi';
import AllDayWeather from './components/AllDayWeather';


function App() {
  const [weatherData, setweatherData] = useState({});
  const [inputCity, setInputCity] = useState("");

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };
  const handleSearch = () => {
    getWetherDetails(inputCity).then((res) => {
      setweatherData(res);
    })
  };

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <SearchBox placeholder="Search for a city..." handleChangeInput={handleChangeInput} handleSearch={handleSearch} />
        {weatherData.cod && <DailyWeather weatherData={weatherData} /> }
        {weatherData.cod && <AllDayWeather weatherData={weatherData} /> }
        {weatherData.cod && <WeaklyWeather weaklyWeatherData={weatherData} /> }
        
      </div>
    </div>
  );
}

export default App;

