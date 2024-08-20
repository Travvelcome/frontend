import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
