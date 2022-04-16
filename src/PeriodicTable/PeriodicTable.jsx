import React, { useState, useEffect } from "react";
import "./PeriodicTable.css";

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
  let response = await fetch(
    "https://periodic-table-elements-info.herokuapp.com/elements"
  );
  let data = await response.json();
  return data;
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
        <div key={`${row}-${column}`} className="gridElement">
          <div className="gridElementAtomicNumber">{element.atomicNumber}</div>
          <div className="gridElementSymbol">{element.symbol}</div>
        </div>
      );
    }
  }

  return <div key={`${row}-${column}`}></div>;
};
