import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MapPage from "./components/map/MapPage";
import FilterPage from "./components/filter/FilterPage";
import SearchPage from "./components/search/SearchPage";
import ChattingPage from "./components/chatting/ChattingPage";
import ChattingHistoryPage from "./components/chatting/ChattingHistoryPage";

function App() {
  const noLayout =
    window.location.pathname === "/map" ||
    window.location.pathname === "/filter" ||
    window.location.pathname === "/search";
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/chatting" element={<ChattingPage />} />
            <Route path="/chattinghistory" element={<ChattingHistoryPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      {!noLayout && <Navbar />}
    </>
  );
}

export default App;
