import React, { useState, useEffect } from 'react';
import { DaysOfWeek, TimeOfDay } from "./DateTimeZone";
import { getWeatherIconClass } from "./WeatherIcon";
import { WeatherForecast } from './WeatherForecast'; 
import axios from 'axios';
import weatherAppPhoto from "../files/photo/weatherAppPhoto.png";
import '../css/main.css';

const API_KEY=process.env.REACT_APP_API_KEY;

const Currentweather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Mostyska'); 
  const [coordinates, setCoordinates] = useState({ lat: 49.79, lon: 23.14 });

  const fetchCoordinates = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}&units=metric`
      );
      if (response.data.length > 0) {
        setCoordinates({
          lat: response.data[0].lat,
          lon: response.data[0].lon
        });
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
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError('Failed to fetch weather data.');
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [coordinates]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCitySubmit = (event) => {
    event.preventDefault();
    fetchCoordinates(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchCoordinates(city);
    }
  };


  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const iconClass = getWeatherIconClass(weatherData.weather[0].id);

  return (
    <div className="weatherApp">
      <h2 className="weatherApp_city">
        <form className="form" onSubmit={handleCitySubmit}>
        <input
        className=" form_input" 
          type="text" 
          placeholder="Enter city"  
          value={city} 
          onChange={handleCityChange} 
          onKeyPress={handleKeyPress}
        />
      </form></h2>
      <div className="weatherApp_photo"><img src={weatherAppPhoto} alt="Weather" /></div>
      <div className="dayInfo">
        <div>
          <p className="dayInfo_text"><b>Today</b></p>
          <DaysOfWeek />
          <p className="dayInfo_text"><i className={`wi wi-${iconClass} iconstyle`}></i> {weatherData.weather[0].description}</p>
          <p className="dayInfo_text"><i className={`wi wi-strong-wind iconstyle`}></i> {Math.round((weatherData.wind.speed * 3.6))} km/h</p>
          <p className="dayInfo_text"><i className={`wi wi-rain iconstyle`}></i> {weatherData.main.humidity}%</p>
        </div>
        <div>
          <TimeOfDay />
          <p className="dayInfo_rightcolumn">{Math.floor(weatherData.main.temp / 10)}°</p>
        </div>
      </div>
      <WeatherForecast coordinates={coordinates} />
    </div>
  );
};

export { Currentweather };
