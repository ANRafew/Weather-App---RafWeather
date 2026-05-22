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
    <div className="min-h-screen bg-cover bg-center bg-[url('/mainbg2.png')]">
      
      {lat === null || lon === null ? (
        <LocationButton onLocationFetched={handleLocationFetched} />
      ) : (
        <WeatherTest lat={lat} lon={lon} />
      )}

    </div>
  );
}

export default App;




