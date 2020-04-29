import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";

import { Container } from "./map.styled";

import { limeAll } from "../../services/lime";
import { birdAll } from "../../services/bird";

import { CircularProgress } from "@material-ui/core";

export const HomePage = () => {
  const [lime, setLime] = useState(false);
  const [bird, setBird] = useState();

  useEffect(() => {
    birdAll().then((bird) => {
      setBird(bird.birds);
      limeAll().then((lime) => setLime(lime));
    });
  }, []);

  //if (lime == null || undefined) {return : false};

  if (!bird || !lime) return <CircularProgress />;

  return (
    <>
      <Container>
        <LoadScript
          id="script-loader"
          googleMapsApiKey={process.env.googleMapsApiKey}
        >
          <GoogleMap
            id="circle-example"
            mapContainerStyle={{
              height: "400px",
              width: "800px",
            }}
            zoom={12}
            center={{
              lat: bird[0].location.latitude,
              lng: bird[0].location.longitude,
            }}
          >
            {bird.map((b) => (
              <Marker
                key={b.id}
                position={{
                  lat: b.location.latitude,
                  lng: b.location.longitude,
                }}
              />
            ))}

            {lime.map((l) => (
              <Marker
                key={l.id}
                position={{
                  lat: l.attributes.latitude,
                  lng: l.attributes.longitude,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </Container>
    </>
  );
};
