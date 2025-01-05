import { useEffect, useState } from 'react'
import React from 'react'
import './Weather.css'
import Aside from './Aside'
import Dashboard from './Dashboard'
import { ThisDay } from './ThisDay'
// import clear_icon from '../assets/01d@2x.png'
// import cloud_icon from '../assets/03d@2x.png'
// import drizzle_icon from '../assets/04d@2x.png'
// import rain_icon from '../assets/09d@2x.png'
// import snow_icon from '../assets/13d@2x.png'
// import search_icon from '../assets/unnamed.png'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather'
import { Weather } from '../store/types/types'
import { selectCurrentWeatherData } from '../store/selectors'

interface Props {
  weather: Weather;
}

const Home = (props : Props) => {
  // const [weatherData, setWeatherData] = useState(false);
  // const [img, setImg] = useState([]);
  const [valueInput, setInput] = useState('')

  // const allIcons = {
  //   "01d": clear_icon,
  //   "01n": clear_icon,
  //   "02d": cloud_icon,
  //   "02n": cloud_icon,
  //   "03d": cloud_icon,
  //   "03n": cloud_icon,
  //   "04d": drizzle_icon,
  //   "04n": drizzle_icon,
  //   "09d": rain_icon,
  //   "09n": rain_icon,
  //   "10d": rain_icon,
  //   "10n": rain_icon,
  //   "13d": snow_icon,
  //   "13n": snow_icon,
  // }

  // useEffect(() => {
  //   search(valueInput || 'Minsk');
  // }, [])

  // useEffect(() => {
  //   imgFon();
  // }, [])

  // const search = async (city) => {
  //   try{
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`;

  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     const icon = allIcons[data.weather[0].icon] || clear_icon;

  //     setWeatherData({
  //       weather: data.weather[0].main,
  //       humidity: data.main.humidity,
  //       windSpeed: data.wind.speed,
  //       temperature: Math.floor(data.main.temp),
  //       location: data.name,
  //       icon: icon,
  //     })
  //   } catch (error){

  //   }
  //  }

   const dispatch = useCustomDispatch();
   const {weather} = useCustomSelector(selectCurrentWeatherData);

   useEffect(() => {
    dispatch(fetchCurrentWeather('Paris'));
   }, []);

  return (
    <div>
    <div className='imgBack'>
      <div className="container">
        <Aside/>
        <div className="content">
          <ThisDay weather={weather}/>
          <Dashboard/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home;

