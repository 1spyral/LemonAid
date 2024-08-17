import { useState } from 'react';
import Home from "./pages/Home";
import Foods from "./pages/Foods"; 
import Header from "./pages/Header"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Camera from "./pages/Camera";


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/food-inventory" element={<Foods />}/>
        <Route path = "/scan-foods" element={<Camera />}/>
      </Routes>
    </Router>
  )
}

export default App