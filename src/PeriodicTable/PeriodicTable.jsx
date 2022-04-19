import React, { useState, useEffect } from "react";
import "./PeriodicTable.css";
import { getData } from "../utils/data-util";
import { renderElementsInGrid } from "./GridElements";

function PeriodicTable() {
  const [data, setData] = useState();
  useEffect(() => {
    const getElements = async () => {
      setData(await getData());
    };
    getElements();
  }, []);

  return data && renderElementsInGrid(data);
}
export default PeriodicTable;
