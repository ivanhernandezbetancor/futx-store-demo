import React from 'react';
import { ShieldCheck, Truck, RotateCcw, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-brand-dark overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-green blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-gold blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 pt-12 lg:pt-24 pb-16 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh]">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pr-12 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-max mx-auto lg:mx-0 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-green"></span>
            <span className="text-white text-xs font-bold tracking-wider uppercase">Nueva Colección Retro 90s</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tighter font-black text-white font-heading leading-[0.9] mb-6 drop-shadow-lg">
            VISTE LA <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">HISTORIA.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed">
            Las camisetas que definieron épocas. 100% auténticas. Hasta un <span className="text-brand-gold font-bold">40% más baratas</span> que en tiendas oficiales. No colecciones, póntelas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#productos" className="bg-brand-green hover:bg-white hover:text-brand-dark text-white font-heading font-black text-lg py-4 px-8 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(26,71,42,0.4)] flex items-center justify-center gap-2 group uppercase tracking-wide">
              Comprar Ahora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#outlet" className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-heading font-bold text-lg py-4 px-8 rounded-sm transition-all duration-300 flex items-center justify-center uppercase tracking-wide">
              Ver Outlet
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center lg:items-start gap-2 text-gray-300">
              <Truck size={24} className="text-brand-green" />
              <span className="text-xs font-bold uppercase tracking-wider text-center lg:text-left">Envío 24-72h<br/>Gratis</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2 text-gray-300">
              <ShieldCheck size={24} className="text-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-center lg:text-left">Calidad<br/>Premium</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2 text-gray-300">
              <RotateCcw size={24} className="text-brand-red" />
              <span className="text-xs font-bold uppercase tracking-wider text-center lg:text-left">30 Días<br/>Garantía</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Composition */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
          {/* Main big jersey floating effect */}
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-brand-gold/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop" 
              alt="FUTX Store Hero" 
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-4 animate-bounce">
              <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Valoración</p>
                <p className="text-brand-dark font-black font-heading leading-none">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
