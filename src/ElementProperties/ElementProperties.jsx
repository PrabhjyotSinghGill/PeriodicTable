import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getElementProperties } from "../utils/data-util";
import "./ElementProperties.css";
import Model from "../Model/Model";
import { backgroundColor } from "../utils/backgroundColor";

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

  return (
    <div className="elementProperties">
      <div className="infoHeader">
        <div
          className="infoHeaderIcon"
          style={{
            background: backgroundColor(element?.period, element?.group),
          }}
        >
          <div className="infoHeaderIconD1">{element?.atomicNumber}</div>
          <div className="infoHeaderIconD2">{element?.symbol}</div>
          <div className="infoHeaderIconD3">{element?.name}</div>
          <div className="infoHeaderIconD4">{element?.atomicMass}</div>
        </div>
        <div className="infoHeaderDetail">
          <div className="infoHeaderDetailD1">{element?.name}</div>
          <div className="infoHeaderDetailD2">{element?.groupBlock}</div>
        </div>
        <Link to="/" className="backButton">
          back
        </Link>
      </div>
      <div className="info">
        <div className="details">
          {element &&
            Object.keys(element).map((key) => (
              <div
                className="element"
                key={`${element.symbol}-${key}`}
              >{`${key}: ${element[key]}`}</div>
            ))}
        </div>
        <Model
          atomicNumber={element?.atomicNumber}
          symbol={element?.symbol}
        ></Model>
      </div>
    </div>
  );
}

export default ElementProperties;
