import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home"; // นำเข้า Home.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ตั้ง Home.jsx เป็นหน้าแรก */}
      </Routes>
    </Router>
  );
}

export default App;
