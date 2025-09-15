import React from 'react';
import { BrowserRouter, Routes, Route }
from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import VideoComp from './components/VideoComp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
