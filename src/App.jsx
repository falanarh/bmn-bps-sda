import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Beranda from './pages/beranda';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-base">
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
      </Routes>
    </div>
  );
}

export default App;
