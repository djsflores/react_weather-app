import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import weatherContext from '../../providers/WeatherProvider';

const Dashboard = () => {
  const [sevenDayWeather, setSevenDayWeather] = useState([]);
  const { weather, location } = useContext(weatherContext);

  const getSevenDayWeather = async () => {
    const { data } = await axios(`http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=${location}&days=7`);
    setSevenDayWeather(data.forecast.forecastday);
  };

  useEffect(() => {
    getSevenDayWeather();
  }, [location]);
  return (
    <div>
      <h1>Dashboard</h1>
      {
        sevenDayWeather?.map((day, i) => <p key={i}>{day.date}</p>)
      }
      <h2>Today&apos;s Hightlights</h2>
      <p>Wind status: {weather?.current?.wind_mph}</p>
      <p>Humidity: {weather?.current?.humidity}</p>
      <p>Visibility: {weather?.current?.vis_miles}</p>
      <p>Air pressure: {weather?.current?.pressure_mb}</p>
    </div>
  );
};

export default Dashboard;
