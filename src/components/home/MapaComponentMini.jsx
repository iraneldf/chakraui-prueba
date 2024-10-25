// components/MapaComponent.jsx
'use client';
import React, {useEffect, useRef} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {HStack, Text, VStack} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";

// Configuración del icono del marcador
const customIcon = new L.Icon({
    iconUrl: '/assets/icons/LocationPin.png', // Ruta a tu imagen
    iconSize: [18, 24], // Tamaño del icono (ancho, alto)
    iconAnchor: [12, 41], // Punto del icono que corresponde a la posición del marcador
    popupAnchor: [1, -34], // Punto desde el que se abrirá el popup
    shadowSize: [41, 41], // Tamaño de la sombra
    // shadowUrl: '/leaflet/marker-shadow.png' // Ruta a la sombra del icono, si la tienes
});


const MapaComponentMini = ({height = '282px', width = '428px'}) => {

    const mapRef = useRef();

    useEffect(() => {
        const mapInstance = mapRef.current; // Copiar la referencia actual a una variable

        return () => {
            if (mapInstance) {
                mapInstance.remove(); // Limpiar el mapa usando la copia de la referencia
            }
        };
    }, []); // Dependencias vacías para que se ejecute una vez al montar

    const position1 = [51.505, -0.09]; // Coordenadas del primer marcador

    return (
        <MapContainer key={position1.join(',')} center={position1} zoom={13} style={{height, width}}>

            <Marker position={position1} icon={customIcon}>
                <Popup>
                    <VStack w={'100%'} gap={'10px'}>
                        <Text color={'#0000005C'} fontFamily="'Inter Regular', sans-serif" lineHeight={'20px'}>Calle 5
                            e/ 25
                            y 36 Siboney Playa #4578 </Text>
                        <Text>BOMBA DE AGUA UYUSTOOLS</Text>

                        <HStack w={'100%'} gap={'10px'}>
                            <Button flex={'1'} p={'12px'} borderColor={'#FF7500'} borderRadius={'16px'}
                                    borderWidth={'1px'}
                                    color={'#FF7500'}
                                    bg={'#FFFFFF'}
                                    fontFamily="'Inter Regular', sans-serif" fontWeight={'600'}>View Details</Button>

                            <Button flex={'1'} px={'12px'} borderRadius={'16px'} bg={'#FF7500'}
                                    color={'#FFFFFF'}

                                    fontFamily="'Inter Regular', sans-serif"
                                    fontWeight={'600'}>Assign</Button>
                        </HStack>

                    </VStack>

                </Popup>

                <Tooltip direction="top" offset={[-8, -2]} opacity={1}>
                    Texto encima del marcador 1
                </Tooltip>
            </Marker>

        </MapContainer>
    );
};

export default MapaComponentMini;