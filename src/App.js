import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from 'react';
import Create from "./pages/Create";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}