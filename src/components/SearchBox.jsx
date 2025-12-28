import React, { useState } from 'react';

function SearchBox({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    // FORM CONTAINER
    // 1. w-full max-w-md: Ensures the form is wide on mobile but doesn't get too wide on desktop
    // 2. gap-2: Adds space between the input and the button
    <form onSubmit={handleSubmit} className="flex justify-center items-center w-full max-w-md mx-auto gap-2 px-4">
      
      <input
        type="text"
        className="flex-grow p-3 rounded-xl border-none outline-none focus:ring-4 focus:ring-blue-300 transition-all text-gray-800 shadow-lg placeholder-gray-500"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      
      <button 
        type="submit" 
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg active:scale-95"
      >
        Search
      </button>
      
    </form>
  );
}

export default SearchBox;