import { createContext, useContext, useState } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('Tucuman');
  const data = {
    weather,
    setWeather,
    location,
    setLocation,
  };

  return (
    <weatherContext.Provider value={data}>
      {children}
    </weatherContext.Provider>
  );
};

export default weatherContext;
