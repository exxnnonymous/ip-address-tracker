import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap} from "react-leaflet";
import styles from "../styles/Map.module.css"
import L from 'leaflet';



const markerIcon = new L.icon({
  iconUrl: "/images/icon-location.png",
  iconSize:[35,40]
})

function MyComponent({lat, lng}) {
  const map = useMap()
  map.flyTo([lat,lng], 13, {duration:0.25});
  return null
}


function Map({lat,lng}) {
 

  return (
    <div className={styles.map_wrapper} >
      <MapContainer center={[lat, lng]} zoom={13} zoomControl={false} style={{height:"100%", width:"100%"}} >
      <MyComponent lat={lat} lng={lng}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={markerIcon}>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
