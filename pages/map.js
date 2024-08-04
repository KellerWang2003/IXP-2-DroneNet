import { useRef, useState, useEffect, useCallback, useContext } from 'react';
import { IdContext } from "../context/idContext";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap
} from '@vis.gl/react-google-maps';
import POI from '@/components/poi';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Marker } from '@googlemaps/markerclusterer';

// Function to convert latLng data
const convertLatLng = ({ latitude, longitude }) => ({
  lat: latitude,
  lng: longitude
});

const PoiMarkers = ({ spots }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);
  const { id, setId } = useContext(IdContext); // Use context state

  // Pan to spot clicked - onclick handler
  const handleClick = useCallback((ev, key) => {
    if (!map) return;
    if (!ev.latLng) return;
    console.log('marker clicked:', ev.latLng.toString(), 'key:', key);

    // Set the map center to the clicked location
    map.panTo(ev.latLng);

    // After setting the center, use panBy to offset the center upwards
    const OFFSET_X = 0;  // Adjust this value to control horizontal offset (pixels)
    const OFFSET_Y = 120;  // Adjust this value to control vertical offset (pixels)
    map.panBy(OFFSET_X, OFFSET_Y);

    setId(key); // Set the ID to the key of the clicked marker
    console.log('id set to:', key);
  }, [map, id]);

  // Marker cluster
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    if (clusterer.current) {
      clusterer.current.clearMarkers();
      clusterer.current.addMarkers(Object.values(markers));
    }
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {spots.map((location) => (
        <AdvancedMarker
          key={location.id}
          position={convertLatLng(location.latLng)}
          ref={marker => setMarkerRef(marker, location.id)}
          clickable={true}
          onClick={(ev) => handleClick(ev, location.id)} // Pass the id to the handler
        >
          <POI {...location} />
        </AdvancedMarker>
      ))}
    </>
  );
};

const GoogleMapComponent = () => {
  const mapOptions = {
    disableDefaultUI: true, // Disable all default UI controls
  };

  //connecting with database
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://us-west-2.cdn.hygraph.com/content/clz60dz7202xp07wdr4rf5fzb/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `query Spot {
              spots {
                id
                image {
                  url
                }
                safetyRating
                latLng {
                  latitude
                  longitude
                }
              }
            }`,
          }),
        }
      );
      const json = await response.json();
      const convertedSpots = json.data.spots.map(spot => ({
        ...spot,
        location: convertLatLng(spot.latLng)
      }));
      setSpots(convertedSpots);
    };

    fetchData();
  }, []);

  return (
    <APIProvider apiKey="AIzaSyBwA7pyze0XndTMMLOhspsQdFq8Xj52_eY" onLoad={() => console.log('Maps API has loaded.')}>
      <div className='w-full h-full focus:outline-none'>
        <Map
          mapId='d3748c5eb4d25d11'
          defaultZoom={13}
          defaultCenter={{ lat: 34.1724529, lng: -118.1941781 }}
          options={mapOptions} // Apply custom map options here
        >
          <PoiMarkers spots={spots} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMapComponent;
