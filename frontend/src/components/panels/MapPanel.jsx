import {
  Box, Button, Card, Input,
} from '@chakra-ui/react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import shp from 'shpjs';
import 'leaflet/dist/leaflet.css';

export default function MapPanel() {
  const [newFile, setNewFile] = useState(null);
  const [file, setFile] = useState(null);

  const handleAccept = () => setFile(newFile);

  return (
    <Box position="relative">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: 'calc(100vh - 60px)' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {file && <Shapefile zipUrl={file} />}
      </MapContainer>
      <Card
        position="absolute"
        bottom="50px"
        right="50px"
        width="250px"
        zIndex="1000"
        bgColor="white"
        p="5"
      >
        <Input type="file" onChange={(e) => setNewFile(e.target.files[0])} pt="1" />
        <Button colorScheme="teal" onClick={handleAccept} mt="3">Accept</Button>
      </Card>
    </Box>
  );
}

function Shapefile({ zipUrl }) {
  const map = useMap();

  useEffect(() => {
    const geo = Leaflet.geoJson(
      { features: [] },
      {
        onEachFeature: (f, l) => {
          const out = [];
          if (f.properties) {
            for (var key in f.properties) {
              out.push(key + ": " + f.properties[key]);
            }
            l.bindPopup(out.join('<br />'));
          }
        },
      },
    ).addTo(map);

    const fr = new FileReader();
    fr.onload = (event) => {
      shp(event.target.result).then((data) => {
        geo.addData(data);

        const allCoords = data.features.map((f) => f.geometry.coordinates[0])
          .reduce((c1, c2) => [...c1, ...c2]);
        map.fitBounds(new Leaflet.LatLngBounds(allCoords.map(([lng, lat]) => [lat, lng])));
      });
    };
    fr.readAsArrayBuffer(zipUrl);
  }, [zipUrl]);

  return null;
}
