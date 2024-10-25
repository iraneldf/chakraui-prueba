// components/MapaComponent.jsx
'use client';
import React from 'react';
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

const MapaComponent = ({height = '526px', width = '1084px'}) => {
    const position1 = [51.505, -0.09]; // Coordenadas del primer marcador
    const position2 = [51.504, -0.08]; // Coordenadas del segundo marcador


    return (
        <MapContainer key={1} center={position1} zoom={13} style={{height, width}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

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
            </Marker>

            <Marker position={position2} icon={customIcon}>
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

export default MapaComponent;