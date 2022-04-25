import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home.js";
import Lists from "./components/Lists.js";

function App() {
  return (
    <Router>
      <div style={{ position: 'absolute', left: '50%', top: '20%',
        transform: 'translate(-50%, -50%)'}}><h1>MBTI CHECK</h1></div>
      <header style={{ position: 'absolute', left: '50%', top: '25%',
        transform: 'translate(-50%, -50%)'}}>
        <Link to="/" style={{ padding:6 }}>Home</Link>
        <Link to="/lists" style={{ padding:6 }}>MBTI Lists</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </Router>
  );
}

export default App;
