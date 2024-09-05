import weatherIntro from "../files/photo/weatherIntro.png";
import React from "react";
import { Currentweather } from "../components/CurrentWeather";
import { NavLink } from 'react-router-dom';


function Home() {
  return (
        <main className="mainHome">
      <section className="mediasection homeBanner">
        <h2 className="banner_title">WeatherTrip</h2>
        <p className="banner_subtitle">
          Your Weather, Your Journey: Always a Step Ahead with Our Weather
          Forecasting App!
        </p>
      </section>
      <section className="mediasection wheatherAppIntro">
        <div>
          <p className="wheatherAppIntro_text">
            Stay prepared for upcomming weather with{" "}
            <span className="blacktext">daily wheather news.</span>
          </p>
          <button className="button">
            <span className="button_text">Explore</span>
          </button>
          <div className="wheatherAppIntro_photo">
            <img src={weatherIntro}></img>
          </div>
        </div>
        <div className="wheatherAppIntro_Rcolumn">
          <Currentweather />
          <div>
            <h3 className="appMini_title">Don´t guess the Weather.</h3>
            <p className="appMini_text">
              Clime for year-round wheather forecasts for your location and
              across the world
            </p>
            <button className="button"><span className="button_text">
            <NavLink to='/WeatherApp' className={"button_link"}>Get started</NavLink></span></button>
          </div>
        </div>
      </section>
    </main>
  );
}

export { Home };
