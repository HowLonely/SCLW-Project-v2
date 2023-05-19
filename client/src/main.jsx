import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


import { Dashboard } from "./pages/Dashboard";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<h1>account</h1>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
