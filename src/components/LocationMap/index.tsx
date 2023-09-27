'use client';
import Container from '../Container';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const center = { lat: 50.907777, lng: 34.79493 };
export default function LocationMap() {
  const googleMapsApiKey = process.env.NEXT_APP_GOOGLE_API_KEY
    ? process.env.NEXT_APP_GOOGLE_API_KEY
    : '';

  return (
    <div className="mt-8">
      <Container>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <div className=" h-[240px] w-full px-4 md:h-[400px] md:w-full xl:h-[405px] xl:w-full">
            <GoogleMap
              mapContainerClassName="map-container w-full h-full"
              center={center}
              zoom={17}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </LoadScript>
      </Container>
    </div>
  );
}
