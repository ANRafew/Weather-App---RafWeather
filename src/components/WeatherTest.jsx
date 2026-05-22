import React from "react";
import { useEffect, useState } from "react";

function WeatherTest({ lat, lon }) {
    const [Weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if (lat !== null && lon !== null){
            const apiKey = import.meta.env.VITE_API_KEY; //use your api key from Openweather by creating your account
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                return res.json(); 
            })
            .then((data) => setWeather(data))
            .catch((err) => setError(err.message));
        }
    }, [lat, lon]);
    
    if (error) return <p>❌ API call failed: {error}</p>;
    if (!Weather) return <p className="flex col justify-center">Loading....</p>;


    const date = new Date();
    const day1 = new Date(date);
    day1.setDate(date.getDate() + 1);
    const day2 = new Date(date);
    day2.setDate(date.getDate() + 2);
    const day3 = new Date(date);
    day3.setDate(date.getDate() + 3);
    const day4 = new Date(date);
    day4.setDate(date.getDate() + 4);
    const day5 = new Date(date);
    day5.setDate(date.getDate() + 5); 


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
        <div className="text-center">
            <h1 className="text-4xl font-bold py-3">Today's Weather</h1>
            <p className="text-xl font-serif"> <i className="fa-solid fa-location-dot text-blue-500"></i>  {Weather.city.name}, {Weather.city.country}</p>
            <p className="text-xl font-serif">
                <i className="fa-regular fa-calendar-days text-blue-500"></i>  {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} </p>
            <div className="py-10">
                <div className="text-7xl font-bold">
                    <p className="text-blue-500 font-mono"><i className="fa-solid fa-temperature-empty text-5xl"></i>{Weather.list[0].main.temp}° </p>
                </div>
                <div className="text-2xl font-serif py-2">
                    <p>{Weather.list[0].weather[0].description}</p>
                    <p>feels like {Weather.list[0].main.feels_like}°</p>
                    <p className="font-mono"><i className="fa-solid fa-cloud-rain text-blue-500"></i>{Weather.list[0].pop * 100}% </p>
                </div>
            </div>

        </div>


        <div className="px-5">
            {/* <h1 className="text-4xl font-bold py-3 text-center">Forecast</h1> */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 py-4">
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold "><i className="fa-regular fa-calendar-days text-white"></i> {day1.getDate()}/{day1.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[1].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[1].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {Weather.list[1].pop * 100}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day2.getDate()}/{day2.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[2].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[2].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {Weather.list[2].pop * 100}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day3.getDate()}/{day3.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[3].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[3].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {Weather.list[3].pop * 100}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day4.getDate()}/{day4.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[4].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[4].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {Weather.list[4].pop * 100}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day5.getDate()}/{day5.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[5].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[5].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {Weather.list[5].pop * 100}%</p>
                </div>
            </div>
        </div>
    </div>

  );
}

export default WeatherTest;
