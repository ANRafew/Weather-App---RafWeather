import { useState } from 'react'
import WeatherTest from "./components/WeatherTest";
import LocationButton from './components/LocationButton';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleLocationFetched = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/mainbg1.jpg')] bg-black/40 bg-blend-overlay">
        {lat === null || lon === null ? (
          <LocationButton onLocationFetched={handleLocationFetched} />
        ) : (
          <WeatherTest lat={lat} lon={lon} />
        )}
    </div>
  );
}

export default App;




