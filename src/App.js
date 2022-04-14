import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable/PeriodicTable";
import ElementDefinition from "./ElementDefinition/ElementDefinition";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <h1>Periodic Table</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<PeriodicTable></PeriodicTable>}></Route>
        <Route
          path="/element"
          element={<ElementDefinition></ElementDefinition>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
