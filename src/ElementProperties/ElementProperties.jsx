import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getElementProperties } from "../utils/data-util";
import "./ElementProperties.css";

function ElementProperties() {
  let { atomicNumber } = useParams();
  const [element, setElement] = useState();

  useEffect(() => {
    const getElement = async () => {
      let myElement = await getElementProperties(atomicNumber);
      setElement(myElement);
    };
    getElement();
  }, [atomicNumber]);

  console.log(element);

  return <div className="elementProperties">{element?.symbol}</div>;
}

export default ElementProperties;
