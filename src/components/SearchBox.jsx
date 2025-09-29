import React, { useState } from 'react';

function SearchBox({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4 h-14 ">
      <input
        type="text"
        className="form-control w-50 text-lg"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary ms-2">Search</button>
    </form>
  );
}

export default SearchBox;
