import { Button, Box, Center, Input } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';

export default function Main() {
    return (
        <Center>
            <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </Center>
    );
}
