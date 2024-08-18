import { useState } from 'react';
import Home from "./pages/Home";
import Foods from "./pages/Foods"; 
import Header from "./pages/Header"; 
import Camera from "./pages/Camera";
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/food-inventory" element={<Foods />} />
        <Route path = "/scan-foods" element={<Camera />} />
        <Route path = "/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  )
}

export default App