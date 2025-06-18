import { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

export default function Map({ marker, sizeSmall = false }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_TOKEN as string,
  });
  const [infoWindowState, setInfoWindowState] = useState(false);
  const center = useMemo(
    () =>
      marker?.lat
        ? {
            lat: parseFloat(marker?.lat),
            lng: parseFloat(marker?.lng),
          }
        : {
            lat: 54.72109414610362,
            lng: 25.296329026990723,
          },
    [marker?.lat, marker?.lng],
  );

  if (!isLoaded) return <div>Loading...</div>;

  //Returns google map component
  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName={
        sizeSmall ? "map-container-sm" : "map-container-lg"
      }
    >
      <MarkerF
        onMouseOver={() => setInfoWindowState(true)}
        onMouseOut={() => setInfoWindowState(false)}
        position={center}
        title={"Subaru Salonas"}
        icon={{
          url: marker?.markerImg || "/icons/JMAmarker.ico",
          scaledSize: new google.maps.Size(50, 50),
        }}
      ></MarkerF>
      {infoWindowState && (
        <InfoWindowF
          position={center}
          onCloseClick={() => setInfoWindowState(false)}
          options={{
            pixelOffset: new google.maps.Size(0, -40),
          }}
        >
          <div className="grid gap-2 p-2">
            {!marker?.locationTitle && !marker?.street && !marker?.workTime && (
              <p>JMA Centras</p>
            )}
            {marker?.locationTitle && <p>{marker?.locationTitle}</p>}
            {marker?.street && <p>{marker?.street}</p>}
            {marker?.workTime && <p>{marker?.workTime}</p>}
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
}
