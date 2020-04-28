import React, { useState, useEffect } from "react";

import { limeAll } from "../../services/lime";
import { birdAll } from "../../services/bird";

export const HomePage = () => {
  const [lime, setLime] = useState();
  const [bird, setBird] = useState();

  useEffect(() => {
    limeAll().then((lime) => {
      setLime(lime);
      birdAll().then((bird) => setBird(bird));
    });
  }, []);

  return (
    <>
      <h1>HomePage </h1>
    </>
  );
};
