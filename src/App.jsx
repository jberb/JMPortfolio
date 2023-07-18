import { useState } from 'react'
import Home from './components/home/Home'
import './styles.css'
import About from './components/about/About'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './Footer';
import Project from './components/project/Project';


function App() {
 
  

  return (
 <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
          </Routes>
          <Footer />
 </BrowserRouter>
  )
}

export default App
