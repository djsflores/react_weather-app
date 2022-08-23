import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import weatherContext from '../../providers/WeatherProvider';
import imgClear from '../../assets/Clear.png';
import imgHail from '../../assets/Hail.png';
import imgHeavyCloud from '../../assets/HeavyCloud.png';
import imgHeavyRain from '../../assets/HeavyRain.png';
import imgLightCloud from '../../assets/LightCloud.png';
import imgLightRain from '../../assets/LightRain.png';
import imgShower from '../../assets/Shower.png';
import imgSleet from '../../assets/Sleet.png';
import imgSnow from '../../assets/Snow.png';
import imgThunderstorm from '../../assets/Thunderstorm.png';

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
    <div className='sidebar'>
      {
        isOpenSearchBar
          ? <SearchBar setIsOpenSearchBar={setIsOpenSearchBar} />
          : <div>
              <button className='btn-places mt-4 mx-5' onClick={handleClick}>Search for places</button>
              <div className='mt-5 w-100 m-0 text-center'>
                <p className='pt-3 font150'>{weather?.current?.temp_c}<span className='font50'>°C</span></p>
                {/* <h3 className="pt-3">{weather?.current?.temp_f}</h3> */}
                {
                  weather?.current?.condition?.text === 'Clear' && (<img src={imgClear}/>)
                }
                {
                  weather?.current?.condition?.text === 'Sunny' && (<img src={imgClear}/>)
                }
                {
                  weather?.current?.condition?.text === 'Partly cloudy' && (<img src={imgLightCloud}/>)
                }
                {
                  weather?.current?.condition?.text === 'Light rain shower' && (<img src={imgLightRain}/>)
                }
                {
                  weather?.current?.condition?.text === 'Heavy rain' && (<img src={imgHeavyRain}/>)
                }
                {
                  weather?.current?.condition?.text === 'Patchy rain possible' && (<img src={imgShower}/>)
                }
                {
                  weather?.current?.condition?.text === 'Partly cloudy' && (<img src={imgHeavyCloud}/>)
                }
                {
                  weather?.current?.condition?.text === 'Overcast' && (<img src={imgHeavyCloud}/>)
                }
                <p className='pt-3 font50'>{weather?.current?.condition?.text}</p>
                <p className='pt-3 font25'>{weather?.location?.localtime}</p>
                <i className='bi bi-geo-alt-fill geoIcon'></i><span className='font25'>{weather?.location?.name}</span>
              </div>
            </div>
      }
    </div>
  );
};

export default SideBar;
