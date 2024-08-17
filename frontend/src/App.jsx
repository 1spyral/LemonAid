import { useState } from 'react';
import Home from "./pages/Home";
import Foods from "./pages/Foods"; 
import Header from "./pages/Header"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
dsadsa

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/food-inventory" element={<Foods />}/>
      </Routes>
    </Router>
  )
}

export default App