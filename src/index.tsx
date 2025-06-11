import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
