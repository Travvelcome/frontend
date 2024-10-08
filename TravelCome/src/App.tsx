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
import OnboardingPage from "./components/onboarding/OnboardingPage";
import Kakao from "./components/signup/Kakao";
import LandingFilterPage from "./components/filter/LandingFilterPage";
import StampPage from "./components/stamp/StampPage";

function App() {
  const noLayout =
    window.location.pathname === "/frontend/map" ||
    window.location.pathname === "/frontend/filter" ||
    window.location.pathname === "/frontend/search" ||
    window.location.pathname === "/frontend/talking" ||
    window.location.pathname === "/frontend/talking/chatting" ||
    window.location.pathname === "/frontend/talking/voice" ||
    window.location.pathname === "/frontend" ||
    window.location.pathname === "/frontend/" ||
    window.location.pathname === "/frontend/landing" ||
    window.location.pathname === "/frontend/callback";
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/frontend" element={<OnboardingPage />} />
            <Route path="/frontend/landing" element={<LandingFilterPage />} />
            <Route path="/frontend/callback" element={<Kakao />} />
            <Route path="/frontend/main" element={<MainPage />} />
            <Route path="/frontend/map" element={<MapPage />} />
            <Route path="/frontend/filter" element={<FilterPage />} />
            <Route path="/frontend/search" element={<SearchPage />} />
            <Route path="/frontend/chatting" element={<ChattingPage />} />
            <Route
              path="/frontend/chatting/history"
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
            <Route path="/frontend/stamp" element={<StampPage />} />
          </Routes>
        </div>
        {!noLayout && <Navbar />}
      </BrowserRouter>
    </>
  );
}

export default App;
