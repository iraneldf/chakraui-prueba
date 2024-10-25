// components/MapaComponent.jsx
'use client';
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configuración del icono del marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
});

const MapaComponentMini = ({height = '282px', width = '428px'}) => {
    const position1 = [51.505, -0.09]; // Coordenadas del primer marcador
    const position2 = [51.504, -0.08]; // Coordenadas del segundo marcador


    // Usar un estado para controlar la clave del mapa
    const [mapKey, setMapKey] = React.useState(0);

    React.useEffect(() => {
        // Cambiar la clave cuando el componente se monta
        setMapKey(prevKey => prevKey + 1);
    }, []);

    return (
        <MapContainer key={2} center={position1} zoom={13} style={{height, width}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={position1}>
                <Popup>
                    Un marcador en Londres (Posición 1).
                </Popup>
            </Marker>

        </MapContainer>
    );
};

export default MapaComponentMini;