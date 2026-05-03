import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cartSlice';

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">FUT<span className="text-brand-gold">X</span></span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 hidden sm:block">Store</span>
            </a>
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-8">
                <a href="#" className="hover:text-brand-gold py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-brand-gold">Inicio</a>
                <a href="#productos" className="hover:text-brand-gold py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent">Retro 90s</a>
                <a href="#productos" className="hover:text-brand-gold py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent">Ediciones Limitadas</a>
                <a href="#productos" className="hover:text-brand-gold py-2 rounded-md text-sm font-semibold transition-colors text-brand-red border-b-2 border-transparent hover:border-brand-red">Outlet -40%</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors hidden sm:block">
              <Search size={22} />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors hidden sm:block">
              <User size={22} />
            </button>
            <button 
              onClick={() => dispatch(toggleCart())}
              className="bg-brand-green hover:bg-brand-gold p-2 rounded-full text-white transition-all flex items-center gap-2 px-4 shadow-lg shadow-brand-green/20 relative group"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold">{totalItems}</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
                </span>
              )}
            </button>
            <button className="text-gray-300 hover:text-white md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
