import {
  Box, Button, Card, Input, useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import shp from 'shpjs';
import 'leaflet/dist/leaflet.css';

export default function MapPanel() {
  const [newFile, setNewFile] = useState(null);
  const [url, setUrl] = useState(null);
  const toast = useToast();

  const handleAccept = async () => {
    try {
      const formData = new FormData();
      formData.append('file', newFile);
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/file`, formData);
      setUrl(`${process.env.NEXT_PUBLIC_API_URL}${data.url}`);
    } catch (e) {
      toast({
        position: 'top',
        title: 'File upload failed',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box position="relative">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: 'calc(100vh - 60px)' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {url && <Shapefile zipUrl={url} />}
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
  const toast = useToast();

  useEffect(() => {
    (async () => {
      try {
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

        const data = await shp(zipUrl);
        geo.addData(data);

        data.features.forEach((f) => {
          const coords = f.geometry.coordinates[0];
          const midLng = coords.map((c) => c[0]).reduce((c1, c2) => c1 + c2) / coords.length;
          const midLat = coords.map((c) => c[1]).reduce((c1, c2) => c1 + c2) / coords.length - 0.0001;
          if (midLat && midLng) {
            const marker = new Leaflet.marker([midLat, midLng], { opacity: 0 });
            marker.bindTooltip(
              Object.entries(f.properties).map(([k, v]) => `${k}: ${v}`).join(', '),
              { permanent: true, offset: [0, 0] },
            );
            marker.addTo(map);
          }
        });

        const allCoords = data.features.map((f) => f.geometry.coordinates[0])
          .reduce((c1, c2) => [...c1, ...c2]);
        map.fitBounds(new Leaflet.LatLngBounds(allCoords.map(([lng, lat]) => [lat, lng])));
      } catch (e) {
        toast({
          position: 'top',
          title: 'File format is invalid',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    })();
  }, [zipUrl]);

  return null;
}
