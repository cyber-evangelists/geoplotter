import React, { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import JSZip from "jszip";
import shp from "shpjs";

function Shape() {
  const [geoJson, setGeoJson] = useState(null);
  const [polygonProperties, setPolygonProperties] = useState(null);

  React.useEffect(()=>{
    console.log('geoJson', geoJson)
  },[geoJson])
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const zip = await JSZip.loadAsync(file);
    const shpFile = zip.file(/\.shp$/i)[0];
    const shpBuffer = await shpFile.async("arraybuffer");
    const geoJson = shp.parse(shpBuffer);
    setGeoJson(geoJson);
  };

  const handleOnEachFeature = (feature, layer) => {
    layer.on("click", () => {
      setPolygonProperties(feature.properties.number);
    });
  };

  return (
    <>
      <Box p={4}>
        <Heading mb={4}>Upload .shape file and draw polygon</Heading>
        <Flex mb={4}>
          <input type="file" onChange={handleFileUpload} />
        </Flex>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {geoJson && (
            <GeoJSON
              data={geoJson}
              onEachFeature={handleOnEachFeature}
              style={() => ({ color: "red" })}
            />
          )}
        </MapContainer>
        {polygonProperties && (
          <Text mt={4}>Polygon properties: {polygonProperties}</Text>
        )}
      </Box>
    </>
  )
}
export default Shape
