import React, { useState, useEffect } from 'react';
import { getWeatherIconClass } from "./WeatherIcon";
import { DaysOfWeek } from './DateTimeZone';
import axios from 'axios';
import '../css/main.css';

const API_KEY=process.env.REACT_APP_API_KEY;

const WeatherForMainApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Lviv');
  const [region, setRegion] = useState('Lviv');
  const [coordinates, setCoordinates] = useState({ lat: 49.79, lon: 23.14 });
  const [displayMode, setDisplayMode] = useState('today');
  const [unit, setUnit] = useState('metric');

  const fetchCoordinates = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );
      if (response.data.length > 0) {
        const { lat, lon, state } = response.data[0];
        setCoordinates({ lat, lon });
        setCity(response.data[0].name);
        setRegion(state || '');
      } else {
        setError('City not found.');
      }
    } catch (error) {
      setError('Failed to fetch coordinates.');
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=${unit}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError('Failed to fetch weather data.');
    }
  };

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=${unit}`
      );
      setForecastData(response.data);
    } catch (error) {
      setError('Failed to fetch forecast data.');
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [coordinates, unit]);

  useEffect(() => {
    if (displayMode === 'today' || displayMode === '5days') {
      fetchForecastData();
    }
  }, [coordinates, displayMode, unit]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchCoordinates(event.target.value);
    }
  };

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  if (!weatherData || !forecastData) {
    return <div>Loading...</div>;
  }

  const iconClass = getWeatherIconClass(weatherData.weather[0].id);
  const temperatureUnitSymbol = unit === 'metric' ? '°C' : '°F';

  const dailyForecast = forecastData.list.filter(item => {
    const date = new Date(item.dt_txt);
    return date.getHours() === 12;
  });


  return (
    <div className="weatherAppMain mediasection">
      <div className="weatherAppMain_head">
        <div>
          <h2 className='weatherAppMain_title'>Weather Forecast</h2>
          <DaysOfWeek />
        </div>
        <form className="form">
          <input
            className="weatherAppMain_input"
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            onKeyPress={handleKeyPress}
          />
        </form>
      </div>
      <div className="weatherApp_info">
        <div className="weatherApp_info_Lcolumn">
          <p className="weatherApp_city weatherApp_text">{city}</p>
          <p className="weatherApp_region weatherApp_text">{region}</p>
          <p className="weatherApp_text"> {Math.floor(weatherData.main.temp)}{temperatureUnitSymbol}</p>
        </div>
        <div className="weatherApp_details">
          <p className="weatherApp_text"><i className={`wi wi-${iconClass} iconstyle`}></i></p>
          <p className='weatherApp_text'> {weatherData.weather[0].description}</p>
          <p className="weatherApp_text"><i className={`wi wi-direction-up iconstyle`}></i> {Math.floor(weatherData.main.temp_max)}{temperatureUnitSymbol}</p>
          <p className="weatherApp_text"><i className={`wi wi-direction-down iconstyle`}></i> {Math.floor(weatherData.main.temp_min)}{temperatureUnitSymbol}</p>
          <p className="weatherApp_text"><i className={`wi wi-strong-wind iconstyle`}></i> {Math.round((weatherData.wind.speed * (unit === 'metric' ? 3.6 : 2.237)))}{unit === 'metric' ? 'km/h' : 'mph'}</p>
          <p className="weatherApp_text"><i className={`wi wi-humidity iconstyle`}></i> {weatherData.main.humidity}%</p>
        </div>
      </div>
      <div className="weatherApp_buttons">
        <div>
        <button className="weatherApp_buttons_day" onClick={() => handleDisplayModeChange('today')}><span className='text'>Today</span></button>
        <button className="weatherApp_buttons_day" onClick={() => handleDisplayModeChange('5days')}><span className='text'>Week</span></button>
        </div>
        <div>
        <button className="weatherApp_buttons_temp" onClick={() => handleUnitChange('metric')}><span className='text'>°C</span></button>
        <button className="weatherApp_buttons_temp" onClick={() => handleUnitChange('imperial')}><span className='text'>°F</span></button>
        </div>
      </div>
      <div className="forecast">
        {displayMode === 'today' ? (
          forecastData.list.slice(0, 5).map((item, index) => (
            <div key={index} className="forecast_item">
                <div>
              <p className="weatherApp_text darktext smalltext ">{new Date(item.dt_txt).toLocaleTimeString()}</p>
              <p className="weatherApp_text smalltext">{item.weather[0].description}</p>
              <p className="weatherApp_text darktext"><i className={`wi wi-thermometer iconstyle`}></i>{Math.floor(item.main.temp)}{temperatureUnitSymbol}</p>
              <p className="weatherApp_text darktext"><i className={`wi wi-humidity iconstyle`}></i>{item.main.humidity}%</p>
              </div>
              <div>
              <p><i className={`wi wi-${getWeatherIconClass(item.weather[0].id)} iconstyle`}></i></p>
            </div>
            </div>
          ))
        ) : (
          dailyForecast.map((item, index) => (
            <div key={index} className="forecast_item">
                <div>
              <p className="weatherApp_text darktext smalltext ">{new Date(item.dt_txt).toLocaleDateString()}</p>
              <p className="weatherApp_text smalltext">{item.weather[0].description}</p>
              <p className="weatherApp_text darktext"><i className={`wi wi-thermometer iconstyle`}></i>{Math.floor(item.main.temp)}{temperatureUnitSymbol}</p>
              <p className="weatherApp_text darktext"><i className={`wi wi-humidity iconstyle`}></i>{item.main.humidity}%</p>
              </div>
              <div>
              <p><i className={`wi wi-${getWeatherIconClass(item.weather[0].id)} iconstyle`}></i></p>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { WeatherForMainApp };



