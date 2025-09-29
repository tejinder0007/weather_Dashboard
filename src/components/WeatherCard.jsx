import React from 'react';

function WeatherCard({ data }) {
  const { name, sys, main, weather } = data;

  return (
    <div className="card border border-transparent mx-auto w-96 flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1638724554921-116b403474df?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] " >
      <div className="card-body w-44 ">
        <h3 className="card-title">
          {name}, {sys.country}
        </h3>
        <h4 className="card-subtitle mb-2 text-muted">{weather[0].main}</h4>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p className="card-text">Temperature: {main.temp}°C</p>
        <p className="card-text">Humidity: {main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
