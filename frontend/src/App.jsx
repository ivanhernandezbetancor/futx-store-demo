import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Privacy from './pages/Privacy';
import SizeGuide from './pages/SizeGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-light flex flex-col font-sans">
        <Navbar />
        <CartDrawer />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/envios-y-devoluciones" element={<Shipping />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/guia-de-tallas" element={<SizeGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
