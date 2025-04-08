import sunny from '../assets/Images/sunny.png'
import cloudy from '../assets/Images/cloudy.png'
import rainy from '../assets/Images/rainy.png'
import snowy from '../assets/Images/snowy.png'
import { useState } from 'react'
const WeatherApp = () => {
  const [data, setData] = useState([])
  const api_key = '5e93452db2c88e43bef7b69adbfd5cab'

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${api_key}`
    const res = await fetch(url)
    const searchData = await res.json()
    console.log(searchData)
  }
  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">London</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter Location"/>
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        <div className="weather">
        <img src={sunny} alt="sunny" />
        <div className="weather-type">Clear</div>
        <div className="temp">28°</div>
        </div>
        <div className="weather-date">
          <p>Fri, 3 May</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="date_name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">35%</div>
          </div>
          <div className="wind">
            <div className="date_name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">3 km/h</div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default WeatherApp