import React, { useState, useContext } from 'react';
import axios from 'axios';
import weatherContext from '../../providers/WeatherProvider';

const SearchBar = ({ setIsOpenSearchBar }) => {
  const [text, setText] = useState('');
  const [cities, setCities] = useState([]);

  const { setWeather, setLocation } = useContext(weatherContext);

  const handleClickClose = () => {
    setIsOpenSearchBar(false);
  };
  const handleClickSearch = async () => {
    const { data } = await axios(`http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${text}`);
    setCities(data);
  };
  const handleChangeSearch = (e) => {
    const enteredText = e.target.value;
    if (enteredText.length > 2) {
      setText(enteredText);
    }
  };
  const handleClickCity = async (cityName, cityId) => {
    const { data } = await axios(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${cityName}`);
    setWeather(data);
    setLocation(cityName);
    setIsOpenSearchBar(false);
  };

  return (
    <div>
      <h1>SearchBar</h1>
      <button onClick={handleClickClose}>Close</button>
      <br/>
      <input type='text' placeholder='Seach location' onChange={handleChangeSearch} />
      {cities
              && cities.map((city, i) => (
                <div
                  key={i}
                  onClick={() => handleClickCity(city.name, city.id)}
                >
                  {city.name}
                </div>
              ))}
      <button onClick={handleClickSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
