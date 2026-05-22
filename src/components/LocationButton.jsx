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
        () => alert("Unable to retrieve location.")
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  return (
    <div className="flex items-center justify-center py-60">
      <div className="p-1">
        <p className="text-center text-xl font-bold">Please Turn On Your Location</p>
        <button
          onClick={autoLocate}
          className="px-8 py-4 bg-blue-600/50 text-white border-double border-4 rounded-3xl hover:bg-blue-700 text-4xl font-bold"
        >
          Check Weather
        </button>
      </div>
    </div>
  );
}

export default LocationButton;
