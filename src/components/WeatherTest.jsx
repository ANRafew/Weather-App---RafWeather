import React from "react";
import { Line } from "react-chartjs-2";
import "./ChartSetup";
import { useEffect, useState } from "react";

function WeatherTest({ lat, lon }) {
    const [Weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if (lat !== null && lon !== null ){
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
    
    if (error) return (
        <div className="text-center pt-70">
        <p className="text-white text-2xl md:text-4xl font-semibold mb-19">
            ❌ Failed: Location Not Found
        </p>
        <button
            onClick={() => window.location.reload()}
            className="text-cyan-300 rounded hover:text-blue-500"
        >
            <i className="fa-solid fa-arrows-rotate text-7xl"></i>
        </button>
        </div>
    );
    if (!Weather) return <p className="flex col justify-center py-50">Loading....</p>;

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


    const Chartdata = {
        labels: [day1.getDate(), day2.getDate(), day3.getDate(), day4.getDate(), day5.getDate()],
        datasets: [
        {
            label: "Maximum Temperature",
            data: [Weather.list[1].main.temp_max, Weather.list[2].main.temp_max, Weather.list[3].main.temp_max, Weather.list[4].main.temp_max, Weather.list[5].main.temp_max],
            borderColor: "oklch(62.3% 0.214 259.815)",          
            backgroundColor: "oklch(48.8% 0.243 264.376)", 
            pointBackgroundColor: "oklch(48.8% 0.243 264.376)",
            tension: 0.5,
        },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
        legend: { display: true,
            labels: {
                color: "white", 
            }
         },
        },
        scales: {
            x: {
                ticks: { color: "white" },  
                font: {
                    size: 14,
                }
            },
            y: {
                ticks: { color: "white" }, 
                font: {
                    size: 14
                }
            },
        },
    };

    const forecast = (Weather.list[1].main.temp_max + Weather.list[2].main.temp_max + Weather.list[3].main.temp_max + Weather.list[4].main.temp_max + Weather.list[5].main.temp_max) / 5;
    
    const handleRefresh = () => {
        window.location.reload(); 
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 py-15 mx-10">
        <div className="text-center pb-5">
            <h1 className="text-4xl font-bold py-3">Today's Weather</h1>
            <p className="text-xl font-serif"> <i className="fa-solid fa-location-dot text-blue-500"></i>  {Weather.city.name}, {Weather.city.country}</p>
            <p className="text-xl font-serif">
                <i className="fa-regular fa-calendar-days text-blue-500"></i>  {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} </p>
            <div className="pt-10 pb-5">
                <div className="text-6xl md:text-7xl font-bold">
                    <p className="text-white md:text-blue-500 font-mono"><i className="text-blue-500 fa-solid fa-temperature-empty"></i>{Weather.list[0].main.temp}° </p>
                </div>
                <div className="text-2xl font-serif py-2">
                    <p>{Weather.list[0].weather[0].description}</p>
                    <p>feels like {Weather.list[0].main.feels_like}°</p>
                    <p>Humidity: {Weather.list[0].main.humidity}%</p>
                    <p className="font-mono"><i className="fa-solid fa-cloud-rain text-blue-500"></i>{parseInt(Weather.list[0].pop * 100)}% </p>
                </div>
            </div>
            <button 
                onClick={handleRefresh} 
                className="text-white rounded hover:text-blue-500"
                >
                <i className="fa-solid fa-arrows-rotate text-4xl"></i>
            </button>
            <p className="p-7 italic text-gray-300">
                <i className="fa-solid fa-triangle-exclamation pr-6"></i>
                Data is updated in every 3 hours. Some data may not be accurate.
            </p>
        </div>

        <div className="">
            <div className="text-center text-3xl font-bold">
                <p className={forecast >= Weather.list[0].main.temp ? "text-red-500" : "text-blue-500" }>
                    {
                        forecast >= Weather.list[0].main.temp ? "Warming Over Next Five Days" : "Cooling Over Next Five Days"
                    }
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 py-4">
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold "><i className="fa-regular fa-calendar-days text-white"></i> {day1.getDate()}/{day1.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[1].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[1].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {parseInt(Weather.list[1].pop * 100)}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day2.getDate()}/{day2.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[2].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[2].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {parseInt(Weather.list[2].pop * 100)}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day3.getDate()}/{day3.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[3].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[3].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {parseInt(Weather.list[3].pop * 100)}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day4.getDate()}/{day4.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[4].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[4].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {parseInt(Weather.list[4].pop * 100)}%</p>
                </div>
                <div className="bg-black/50 text-center rounded-xl p-5">
                    <p className="bg-sky-900 rounded-2xl text-xl font-semibold"><i className="fa-regular fa-calendar-days text-white"></i> {day5.getDate()}/{day5.getMonth()+1}</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold pt-2"><i className="fa-solid fa-arrow-up"></i>{Weather.list[5].main.temp_max}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-arrow-down"></i>{Weather.list[5].main.temp_min}°</p>
                    <p className="text-xl text-blue-500 font-mono font-extrabold"><i className="fa-solid fa-cloud-rain"></i> {parseInt(Weather.list[5].pop * 100)}%</p>
                </div>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-3 md:w-150 md:ml-20">
                <Line className="text-white" data={Chartdata} options={options} />
            </div>

        </div>
    </div>
  );
}

export default WeatherTest;
