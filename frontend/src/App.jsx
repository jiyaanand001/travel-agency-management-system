import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './pages/Public/Home';
import Packages from './pages/Public/Packages';
import About from './pages/Public/About';
import Contact from './pages/Public/Contact';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-light text-dark">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
