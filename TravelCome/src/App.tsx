import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MapPage from "./components/map/MapPage";
import FilterPage from "./components/filter/FilterPage";

function App() {
  const noLayout =
    window.location.pathname === "/map" ||
    window.location.pathname === "/filter";
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/filter" element={<FilterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      {!noLayout && <Navbar />}
    </>
  );
}

export default App;
