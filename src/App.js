import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable/PeriodicTable";
import ElementProperties from "./ElementProperties/ElementProperties";
import { Routes, Route, Link } from "react-router-dom";

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
          path="/element"
          element={<ElementProperties></ElementProperties>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
