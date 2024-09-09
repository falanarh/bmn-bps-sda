import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/beranda';
import Navbar from './components/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-base dark:bg-gray-900 dark:text-white">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Beranda />} />
      </Routes>
    </div>
  );
}

export default App;
