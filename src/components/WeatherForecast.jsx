import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getWeatherIconClass } from './WeatherIcon';
import '../css/main.css';

const API_KEY=process.env.REACT_APP_API_KEY;

const WeatherForecast = ({ coordinates }) => { 
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) { 
      const fetchWeatherForecast = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`
          );
          setForecastData(response.data);
        } catch (error) {
          setError('Failed to fetch weather forecast.');
        }
      };

      fetchWeatherForecast();
    }
  }, [coordinates]); 

  if (error) {
    return <div>{error}</div>;
  }

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  const renderForecast = () => {
    const forecasts = forecastData.list.slice(0, 5);

    return forecasts.map((forecast, index) => {
      const time = new Date(forecast.dt * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      const iconClass = getWeatherIconClass(forecast.weather[0].id);
      const temperature = Math.round(forecast.main.temp);

      return (
        <div key={index} className="forecastItem">
          <p className="forecastItem_info">{time}</p>
          <i className={`wi wi-${iconClass} iconstyle`}></i>
          <p className="forecastItem_info">{temperature / 10}°C</p>
        </div>
      );
    });
  };

  return (
    <div className="weatherForecast">
      <div className="forecastContainer">{renderForecast()}</div>
    </div>
  );
};

export { WeatherForecast };
