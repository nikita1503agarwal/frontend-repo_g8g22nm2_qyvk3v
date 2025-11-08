import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 font-inter">
      <Header />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
