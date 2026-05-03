import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductList />
      
      {/* Banner Descuento */}
      <section className="bg-brand-dark py-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1e12f452076e?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center bg-fixed"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 uppercase tracking-tighter">
            Únete al <span className="text-brand-gold">Club FUTX</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 font-medium">
            Consigue un <strong className="text-white">15% de descuento</strong> en tu primer pedido y entérate antes que nadie de los drops exclusivos.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Ingresa tu email" 
              className="flex-grow px-6 py-4 rounded-sm text-brand-dark font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold"
              required
            />
            <button type="submit" className="bg-brand-green hover:bg-brand-gold text-white font-bold px-8 py-4 rounded-sm transition-colors uppercase tracking-wider">
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Testimonios</span>
            <h2 className="text-4xl font-heading font-black text-brand-dark uppercase">Ellos ya visten la historia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-6">★★★★★</div>
              <p className="text-gray-600 mb-6 font-medium">"Compré la del Madrid del 98. Calidad brutal, idéntica a la original. El escudo bordado está perfecto."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold text-brand-dark">Carlos M.</p>
                  <p className="text-xs text-gray-500">Comprador Verificado</p>
                </div>
              </div>
            </div>
            {/* ... other testimonials omitted for brevity ... */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
