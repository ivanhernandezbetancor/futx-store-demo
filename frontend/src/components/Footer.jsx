import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 mb-6">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">FUT<span className="text-brand-gold">X</span></span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-2">Store</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              La plataforma líder en camisetas de fútbol históricas, retro y vintage. Viste la historia.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-brand-gold">Categorías</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Retro (80s - 90s)</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Clásicos Modernos (00s)</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Ediciones Limitadas</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors text-brand-red">Outlet Sorpresa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-brand-gold">Soporte</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ & Ayuda</Link></li>
              <li><Link to="/envios-y-devoluciones" className="hover:text-white transition-colors">Envíos y Devoluciones</Link></li>
              <li><Link to="/guia-de-tallas" className="hover:text-white transition-colors">Guía de Tallas</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-brand-gold">Únete al Club</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe 15% OFF en tu primera compra y acceso anticipado a drops limitados.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-brand-green"
              />
              <button type="submit" className="btn-primary w-full text-sm">
                Quiero el 15% OFF
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 FUTX STORE. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500 text-sm">
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
