import React from 'react';

function WeatherCard({ data }) {
  const { name, sys, main, weather } = data;

  return (
    
    <div className="mx-auto mt-8 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center transition-transform hover:scale-105 duration-300"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1638724554921-116b403474df?q=80&w=387&auto=format&fit=crop')" }}>
      
    
      <div className="bg-black/40 backdrop-blur-sm p-8 flex flex-col items-center text-center text-white">
        
       
        <h3 className="text-3xl font-bold tracking-wide">
          {name}, <span className="text-yellow-300">{sys.country}</span>
        </h3>
        
        {/* WEATHER DESCRIPTION */}
        <h4 className="text-xl font-medium mt-1 capitalize text-gray-200">
          {weather[0].main}
        </h4>

        {/* WEATHER ICON */}
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt="weather icon"
          className="w-32 h-32 drop-shadow-md"
        />

        {/* TEMPERATURE */}
        <p className="text-6xl font-extrabold mb-4">
          {Math.round(main.temp)}°
        </p>

        {/* DETAILS ROW */}
        <div className="flex justify-between w-full px-6 mt-4 border-t border-white/30 pt-4">
          <div className="flex flex-col">
            <span className="text-gray-300 text-sm">Humidity</span>
            <span className="text-xl font-semibold">{main.humidity}%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-300 text-sm">Feels Like</span>
            <span className="text-xl font-semibold">{Math.round(main.feels_like)}°</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;