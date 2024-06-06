import { useState } from 'react'
import NavBar from './components/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Footer from './components/Footer';

import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
