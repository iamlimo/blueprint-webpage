import React from 'react'
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Solutions from './components/Solutions';
import OurCulture from './OurCulture';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Solutions />} />
        <Route path='culture' element={<OurCulture />} />
      </Routes>
    </div>
  );
}

export default App;