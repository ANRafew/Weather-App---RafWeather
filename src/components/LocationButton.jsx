import React, { useState } from "react";

function LocationButton({ onLocationFetched }) {
  const [coords, setCoords] = useState(null);

  const autoLocate = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = Number(position.coords.latitude.toFixed(1));
          const lon = Number(position.coords.longitude.toFixed(1));
          setCoords({ lat, lon });


          if (onLocationFetched) {
            onLocationFetched(lat, lon);
          }
        },
        () => alert("Unable to retrieve location. Please Turn ON your Device Location")
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  return (
    <div className="pt-5">
      <p className="text-center text-4xl font-bold">Check Weather</p>
      <div className="pt-45 flex items-center justify-center">
        <button
          onClick={autoLocate}
          className="px-8 py-4 bg-blue-600/50 text-white border-double border-4 rounded-4xl hover:bg-blue-700 text-3xl font-bold"
        >
          Use Device Location
        </button>
      </div>
    </div>
  );
}

export default LocationButton;
