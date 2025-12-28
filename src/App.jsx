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
    
    <div className="flex justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1651523862184-5663390bea44?q=80&w=929&auto=format&fit=crop')] px-4 py-8">
      
      
      <div className="w-full max-w-lg md:max-w-2xl text-center flex flex-col items-center mt-10 md:mt-32 gap-6">
        
       
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          🌤️ Weather Dashboard
        </h2>
        
        <SearchBox fetchWeather={fetchWeather} />
        
        {loading ? (
          <p className="text-white text-xl font-semibold animate-pulse">Loading...</p>
        ) : (
          weatherData && <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;