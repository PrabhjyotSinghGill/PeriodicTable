import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable/PeriodicTable";
import ElementProperties from "./ElementProperties/ElementProperties";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <h2>Periodic Table</h2>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={
        <div className="periodicTableContainer">
          <PeriodicTable></PeriodicTable>
          <Footer></Footer>
        </div>
        }>
        </Route>
        <Route path="/PeriodicTable/" element={<div className="periodicTableContainer">
          <PeriodicTable></PeriodicTable>
          <Footer></Footer>
        </div>}>
        </Route>
        <Route
          path="/element/:atomicNumber"
          element={<ElementProperties></ElementProperties>}
        ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
