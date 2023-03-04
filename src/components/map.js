import React from "react";
import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Header from "./header";

function marcar(lista) {
  if (!lista) {
    return;
  }
  const listaFiltrada = lista.map((item) => {
    if (!item.latitude || !item.longitude || !item.givenName || !item.surname) {
      return null;
    }

    if (isNaN(item.latitude) || isNaN(item.longitude)) {
      return null;
    }
    return (
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <span>{item.givenName + " " + item.surname}</span>
        </Popup>
      </Marker>
    );
  });
  return listaFiltrada;
}

export default class Map extends React.Component {
  render() {
    const lista = this.props.objectList;
    return (
      <div>
        <Header></Header>
        <div className="container">
          <MapContainer
            center={[-22.92758, -47.071317]}
            zoom={6}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marcar(lista)}
          </MapContainer>
        </div>
      </div>
    );
  }
}
