import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MapPage from "./components/map/MapPage";
import FilterPage from "./components/filter/FilterPage";
import SearchPage from "./components/search/SearchPage";

function App() {
  const noLayout =
    window.location.pathname === "/map" ||
    window.location.pathname === "/filter" ||
    window.location.pathname === "/search";
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      {!noLayout && <Navbar />}
    </>
  );
}

export default App;
