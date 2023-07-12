import { useState, useEffect } from "react";
import { Map, Marker, GeolocateControl, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card } from "@mantine/core";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2tpcm8iLCJhIjoiY2w1aTZjN2x2MDI3ODNkcHp0cnhuZzVicSJ9.HMjwHtHf_ttkh_aImSX-oQ";

const Lmap = () => {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 23.1957247,
          longitude: 77.7908816,
          zoom: 3.5,
        }}
        style={{ width: "100%", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={77.5946} latitude={12.9716} color="green" />

        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
};

export default Lmap;
