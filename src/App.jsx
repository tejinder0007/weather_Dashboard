import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';

const API_KEY = '11a2f6622d2dbf0d801a048539735ade';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert('City not found.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center content-center   w-full h-screen m-0 bg-cover bg-[url('https://images.unsplash.com/photo-1651523862184-5663390bea44?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-hidden">
    <div className="container text-center flex flex-col relative top-40 ">
      <h2 className="mb-4 text-5xl">🌤️ Weather Dashboard</h2>
      <SearchBox fetchWeather={fetchWeather} />
      {loading ? <p>Loading...</p> : weatherData && <WeatherCard data={weatherData} />}
    </div></div>
  );
}

export default App;
