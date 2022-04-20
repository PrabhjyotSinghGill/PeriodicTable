import React from "react";
import "./Model.css";

function Model({ atomicNumber, symbol }) {
  return (
    <div className="modelViewer">
      {/* <h3>{atomicNumber}</h3>
      <h3>{symbol}</h3> */}
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
    </div>
  );
}

export default Model;
