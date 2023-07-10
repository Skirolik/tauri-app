import { useState, useEffect } from "react";
import { Map, Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2tpcm8iLCJhIjoiY2w1aTZjN2x2MDI3ODNkcHp0cnhuZzVicSJ9.HMjwHtHf_ttkh_aImSX-oQ";

const Lmap = () => {
  return (
    <Map
      initialViewState={{
        latitude: 12.9237,
        longitude: 77.5938,
        zoom: 5,
      }}
      style={{ width: "80%", height: 650 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {/* <Marker latitude={12.9237} longitude={77.5938}></Marker> */}
    </Map>
  );
};

export default Lmap;
