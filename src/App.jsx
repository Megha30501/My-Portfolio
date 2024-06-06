import { useState } from 'react'
import Home from './components/Home/Home'

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
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
