import React from "react";
import { useParams } from "react-router-dom";
import "./ElementProperties.css";
import Model from "../Model/Model";
import PeriodicTable from "../PeriodicTable/PeriodicTable";

function ElementProperties() {
  let { atomicNumber } = useParams();
  return (
    <div className="elementProperties">
      <PeriodicTable></PeriodicTable>
      <Model atomicNumber={atomicNumber}></Model>
    </div>
  );
}

export default ElementProperties;
