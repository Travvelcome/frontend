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
import MyPage from "./components/my/MyPage";
import LeavePage from "./components/my/LeavePage";

function App() {
  const noLayout =
    window.location.pathname === "/frontend/map" ||
    window.location.pathname === "/frontend/filter" ||
    window.location.pathname === "/frontend/search";
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/frontend" element={<MainPage />} />
            <Route path="/frontend/map" element={<MapPage />} />
            <Route path="/frontend/filter" element={<FilterPage />} />
            <Route path="/frontend/search" element={<SearchPage />} />
            <Route path="/frontend/chatting" element={<ChattingPage />} />
            <Route
              path="/frontend/chattinghistory"
              element={<ChattingHistoryPage />}
            />
            <Route path="/frontend/my" element={<MyPage />} />
            <Route path="/frontend/my/leave" element={<LeavePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      {!noLayout && <Navbar />}
    </>
  );
}

export default App;
