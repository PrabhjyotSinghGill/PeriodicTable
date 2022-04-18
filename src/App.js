import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable/PeriodicTable";
import ElementProperties from "./ElementProperties/ElementProperties";
import { Routes, Route, Link } from "react-router-dom";
import Model from "./Model/Model";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <h2>Periodic Table</h2>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<PeriodicTable></PeriodicTable>}></Route>
        <Route
          path="/element/:atomicNumber"
          element={<ElementProperties></ElementProperties>}
        ></Route>
      </Routes>
      <div className="footer"></div>
    </div>
  );
}

export default App;
