import { useState } from 'react';
import useWeatherData from './Hooks/useWeatherData';

const App = () => {
  const [city, setCity] = useState("");
  const weather = useWeatherData(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.city.value.trim();
    setCity(value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="flex flex-col justify-between p-5 rounded-2xl shadow-[0_0_28px_rgba(59,130,280,0.7)] bg-gray-700 border-none hover:shadow-[0_0_48px_rgba(59,130,280,1)] transition-shadow duration-[700ms] ease-in-out">
        
        <form onSubmit={handleSubmit} className="mb-4 flex">
          <input
            name="city"
            type="text"
            placeholder="City"
            className="w-[70%] px-3 py-2 mr-2 rounded-lg bg-gray-200 border-none outline-none"
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>

        {weather.main && weather.weather ? (
          <div className="h-[40vh] w-[280px] sm:w-[400px] bg-gradient-to-br from-white to-blue-100 rounded-3xl p-6 shadow-2xl flex flex-col justify-center items-center space-y-4 text-gray-800 border border-blue-200">
            <h1 className="text-3xl font-extrabold tracking-wide text-blue-800">{weather.name}</h1>
            <p className="text-5xl font-bold text-gray-900">{Math.round(weather.main.temp)}°C</p>
            <p className="text-md font-medium text-gray-600">Humidity: {weather.main.humidity}%</p>
            <p className="text-md italic text-blue-600 capitalize">{weather.weather[0].description}</p>
          </div>
        
        ) : (
          <div className="text-white text-center h-[50vh] flex items-center justify-center">
            Enter a city to get weather 🌤️
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
