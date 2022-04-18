import React from "react";

function Model({ atomicNumber }) {
  return (
    <model-viewer
      src={process.env.PUBLIC_URL + `/${atomicNumber}.glb`}
      className="sodium"
      autoplay=""
      bounds="tight"
      camera-controls=""
      camera-orbit="-0.6751deg 70.99deg 1.4m"
      exposure="0.3"
      field-of-view="20deg"
      max-camera-orbit="auto 180deg auto"
      min-camera-orbit="auto 0deg auto"
      auto-rotate
      camera-controls=""
    ></model-viewer>
  );
}

export default Model;
