import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import GoldPrice from './components/GoldPrice';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <GoldPrice />
      </main>
      <Footer />
    </div>
  );
}

export default App;
