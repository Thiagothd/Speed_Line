import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}

export default App;