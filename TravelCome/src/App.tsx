import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import "./App.css";

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
    </>
  );
}

export default App;
