import { useRef, useState, useEffect, useCallback, useContext } from 'react';
import { IdContext } from "./idContext";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap
} from '@vis.gl/react-google-maps';
import POI from '@/components/poi';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { Marker } from '@googlemaps/markerclusterer';

let spotList = [
    {
        key: "centralPark",
        image: "/images/centralPark.png",
        name: "Central Park",
        distance: "7",
        numOfPosts: "6",
        star: "4.7",
        safetyRating: "80",
        location: { lat: 34.1419588, lng: -118.1497474 }
    },
    {
        key: "roseBowlStadium",
        image: "/images/roseBowl.png",
        name: "Rose Bowl Stadium",
        distance: "5",
        numOfPosts: "3",
        star: "3.5",
        safetyRating: "20",
        location: { lat: 34.1613, lng: -118.1676 }
    },
    {
        key: "1111SouthArroyo",
        image: "/images/1111.png",
        name: "1111 South Arroyo",
        distance: "7",
        numOfPosts: "20",
        star: "4.5",
        safetyRating: "65",
        location: { lat: 34.128190, lng: -118.147710 }
    },
    {
        key: "870",
        image: "/images/950.png",
        name: "870",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95",
        location: { lat: 34.1315032, lng: -118.148362 }
    },
    {
        key: "1700LidaStreet",
        image: "/images/870.png",
        name: "Artcenter Hillside Campus",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95",
        location: { lat: 34.1786, lng: -118.1966 }
    },
    {
        key: "456HappyStreet",
        image: "/images/profile.jpg",
        name: "456 Happy St.",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95"
    },
];

const PoiMarkers = ({ spotList }) => {
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
      {spotList.map((location) => (
        <AdvancedMarker
          key={location.key}
          position={location.location}
          ref={marker => setMarkerRef(marker, location.key)}
          clickable={true}
          onClick={(ev) => handleClick(ev, location.key)} // Pass the key to the handler
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

  return (
    <APIProvider apiKey="AIzaSyBwA7pyze0XndTMMLOhspsQdFq8Xj52_eY" onLoad={() => console.log('Maps API has loaded.')}>
      <div className='w-full h-full focus:outline-none'>
        <Map
          mapId='d3748c5eb4d25d11'
          defaultZoom={13}
          defaultCenter={{ lat: 34.1724529, lng: -118.1941781 }}
          options={mapOptions} // Apply custom map options here
        >
          <PoiMarkers spotList={spotList} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMapComponent;
