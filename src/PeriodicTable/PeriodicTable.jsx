import React, { useState, useEffect } from "react";
import "./PeriodicTable.css";
import { Link } from "react-router-dom";
import { backgroundColor } from "../utils/backgroundColor";

const renderElementsInSimpleFormat = (data) => {
  return (
    <div className="periodicTable">
      {data.map((element) => (
        <div key={element.atomicNumber}>{element.symbol}</div>
      ))}
    </div>
  );
};

const renderElementsInGrid = (data) => {
  return <div className="periodicTableGrid">{getElementsForGrid(data)}</div>;
};

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

const getData = async () => {
  let elementsFromLocalStorage = localStorage.getItem("periodic-table-element");
  if (elementsFromLocalStorage) {
    return JSON.parse(elementsFromLocalStorage);
  } else {
    let response = await fetch(
      "https://periodic-table-elements-info.herokuapp.com/elements"
    );
    let data = await response.json();
    localStorage.setItem("periodic-table-element", JSON.stringify(data));
    return data;
  }
};

const getElementsForGrid = (data) => {
  let result = [];
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 18; j++) {
      result.push(getElementAtRowAndColumn(data, i, j));
    }
  }
  console.log(result);
  return result;
};

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
