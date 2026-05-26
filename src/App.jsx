import { useState } from 'react'
import WeatherTest from "./components/WeatherTest";
import LocationButton from './components/LocationButton';
import WeatherTestCity from './components/WeatherTestCity';
import SearchCity from './components/SearchCity';
import About from './components/About';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleLocationFetched = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };

  const [submittedValue, setSubmittedValue] = useState(null);
  


  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/mainbg2.jpg')] md:bg-[url('/mainbg1.jpg')] bg-black/40 bg-blend-overlay">
        {!submittedValue && (lat === null || lon === null) && (
          <LocationButton onLocationFetched={handleLocationFetched} />
        )}
        {!submittedValue && lat !== null && lon !== null && (
          <WeatherTest lat={lat} lon={lon} />
        )}
        {!submittedValue && lat===null && lon===null && <SearchCity onSubmit={setSubmittedValue} />}
        {submittedValue && lat===null && lon===null && <WeatherTestCity name={submittedValue} />}
        <About/>
    </div>
  );
}

export default App;




