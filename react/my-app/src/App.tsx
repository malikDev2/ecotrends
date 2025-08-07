import { useState } from 'react'
import Home from "./pages/home.tsx";
import Eco from "./pages/economy.tsx";
import Afford from './pages/affordability.tsx';
import Ineq from './pages/inequality.tsx';
import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/economy/" element={<Eco/>}/>
        <Route path="/affordability" element={<Afford/>}/>
        <Route path="/inequality" element={<Ineq/>}/>

      </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
