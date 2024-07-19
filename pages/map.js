import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker
} from '@vis.gl/react-google-maps';
import POI from '@/components/poi';

const locations = [
    { key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108 } },
    { key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 } },
    { key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 } },
    { key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 } },
    { key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 } },
    { key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 } },
    { key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 } },
    { key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 } },
    { key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 } },
    { key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 } },
    { key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 } },
    { key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 } },
    { key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 } },
    { key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 } },
    { key: 'barangaroo', location: { lat: -33.8605523, lng: 151.1972205 } },
];

const PoiMarkers = ({ locations }) => {
    return (
        <>
            {locations.map((location) => (
                <AdvancedMarker
                    key={location.key}
                    position={location.location}
                >
                    <POI safetyRating="67" image="/images/profile.jpg"/>
                </AdvancedMarker>
            ))}
        </>
    );
};

const GoogleMapComponent = () => {
    return (
        <APIProvider apiKey="AIzaSyBwA7pyze0XndTMMLOhspsQdFq8Xj52_eY" onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                mapId='d3748c5eb4d25d11'
                defaultZoom={13}
                defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
                onCameraChanged={(ev) =>
                    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                }
            >
                <PoiMarkers locations={locations} />
            </Map>
        </APIProvider>
    );
};

export default GoogleMapComponent;
