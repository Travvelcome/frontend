import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MapPage from "./components/map/MapPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
