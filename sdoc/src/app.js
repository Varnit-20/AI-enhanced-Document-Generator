import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Generate from "./pages/Generate";

export default function app() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
      <div style={{ textAlign: "center", fontSize: 13, color: "#94a3b8" }}>
        Built with ❤️ — sdoc demo
      </div>
    </div>
  );
}
