'use client';
import { useMemo } from 'react';
import Container from '../Container';
import Section from '../Section';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

export default function LocationMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
      ? process.env.REACT_APP_GOOGLE_API_KEY
      : '',
  });

  const center = useMemo(
    () => ({ lat: 50.907779693603516, lng: 34.79498291015625 }),
    []
  );

  return (
    <div className="mt-8">
      <Container>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <div className=" h-[240px] w-full px-4 md:h-[400px] md:w-full xl:h-[405px] xl:w-full">
            <GoogleMap
              mapContainerClassName="map-container w-full h-full"
              center={center}
              zoom={10}
            >
              <Marker position={{ lat: 50.9078011, lng: 34.7950588 }} />
            </GoogleMap>
          </div>
        )}
      </Container>
    </div>
  );
}
