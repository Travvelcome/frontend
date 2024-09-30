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
import TalkingMainPage from "./components/talking/TalkingMainPage";
import TalkingChattingPage from "./components/talking/TalkingChattingPage";
import TalkingVoicePage from "./components/talking/TalkingVoicePage";

function App() {
  const noLayout =
    window.location.pathname === "/frontend/map" ||
    window.location.pathname === "/frontend/filter" ||
    window.location.pathname === "/frontend/search" ||
    window.location.pathname === "/frontend/talking" ||
    window.location.pathname === "/frontend/talking/chatting" ||
    window.location.pathname === "/frontend/talking/voice";
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
            <Route path="/frontend/talking" element={<TalkingMainPage />} />
            <Route
              path="/frontend/talking/chatting"
              element={<TalkingChattingPage />}
            />
            <Route
              path="/frontend/talking/voice"
              element={<TalkingVoicePage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      {!noLayout && <Navbar />}
    </>
  );
}

export default App;
