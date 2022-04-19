import React from "react";
import { Link } from "react-router-dom";
import { backgroundColor } from "../utils/backgroundColor";
import "./PeriodicTable.css";

//Creates a Grid for Periodic Table Elements
export const renderElementsInGrid = (elementsArray) => {
  return (
    <div className="periodicTableGrid">{getElementsForGrid(elementsArray)}</div>
  );
};

//Retuns an array of elements in correct order for the grid
const getElementsForGrid = (elements) => {
  let result = [];
  const NO_OF_ROWS = 7;
  const NO_OF_COLUMNS = 18;
  for (let i = 1; i <= NO_OF_ROWS; i++) {
    for (let j = 1; j <= NO_OF_COLUMNS; j++) {
      result.push(getElementAtRowAndColumn(elements, i, j));
    }
  }
  console.log(result);
  return result;
};

//Returns link or empty div to be displayed in the grid
const getElementAtRowAndColumn = (elements, row, column) => {
  for (let k = 0; k < elements.length; k++) {
    let element = elements[k];
    if (element.symbol === "B") {
      element.period = 2;
    }
    if (element.period === row && element.group === column) {
      return (
        <Link
          to={`/element/${element.atomicNumber}`}
          key={`${row}-${column}`}
          className="gridElement"
          style={{ background: backgroundColor(element.period, element.group) }}
        >
          <div className="gridElementAtomicNumber">{element.atomicNumber}</div>
          <div className="gridElementSymbol">{element.symbol}</div>
        </Link>
      );
    }
  }

  return <div key={`${row}-${column}`}></div>;
};
