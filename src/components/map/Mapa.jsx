import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Mapa = ({ lat, long, data }) => {

  return (
    <MapContainer center={[lat, long]} zoom={14.5} scrollWheelZoom={false} style={{ height: '400px', width: '75%', marginTop: '1rem', margin: 'auto' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        data.map(station => (
          <Marker key={station.name} position={[station.latitude, station.longitude]}>
            <Popup>
              {station.name}
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  )
}
