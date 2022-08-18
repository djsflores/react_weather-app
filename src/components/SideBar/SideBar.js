import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import weatherContext from '../../providers/WeatherProvider';

const SideBar = () => {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

  const { weather, setWeather, location } = useContext(weatherContext);

  const handleClick = () => {
    setIsOpenSearchBar(true);
  };

  const getDefaultWeather = async () => {
    const { data } = await axios(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${location}`);
    setWeather(data);
  };

  useEffect(() => {
    getDefaultWeather();
  }, []);

  return (
    <div>
      {
        isOpenSearchBar
          ? <SearchBar setIsOpenSearchBar={setIsOpenSearchBar} />
          : <div>
              <h1>SideBar</h1>
              <button onClick={handleClick}>Search for places</button>
              <div>
                <h3 className="pt-3">{weather?.current?.temp_c}</h3>
                <h3 className="pt-3">{weather?.current?.temp_f}</h3>
                <h4 className="pt-3">{weather?.current?.condition?.text}</h4>
                <h6 className="pt-3">{weather?.location?.localtime}</h6>
                <h6 className="py-4">{weather?.location?.name}</h6>
              </div>
            </div>
      }
    </div>
  );
};

export default SideBar;
