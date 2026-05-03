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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-4 text-lg">★★★★★</div>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">"Compré la del Madrid del 98. Calidad brutal, idéntica a la original. El escudo bordado está perfecto."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-green to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm">CM</div>
                <div>
                  <p className="font-bold text-brand-dark">Carlos M.</p>
                  <p className="text-xs text-gray-500">Comprador Verificado · Madrid</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-4 text-lg">★★★★★</div>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">"La del Barça del 99 es una pasada. Mi padre se emocionó cuando se la regalé por su cumpleaños. Envío rapidísimo."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">LP</div>
                <div>
                  <p className="font-bold text-brand-dark">Laura P.</p>
                  <p className="text-xs text-gray-500">Compradora Verificada · Barcelona</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-4 text-lg">★★★★★</div>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">"Tercer pedido que hago. La del Arsenal Invencibles es mi favorita. Tela de calidad y las costuras impecables."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm">MR</div>
                <div>
                  <p className="font-bold text-brand-dark">Miguel R.</p>
                  <p className="text-xs text-gray-500">Comprador Verificado · Sevilla</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-4 text-lg">★★★★★</div>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">"Flipé con la de la Juve del 96. Es como tenerla recién sacada de la tienda. Mis amigos me preguntan de dónde la saqué."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">AG</div>
                <div>
                  <p className="font-bold text-brand-dark">Alejandro G.</p>
                  <p className="text-xs text-gray-500">Comprador Verificado · Valencia</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-4 text-lg">★★★★<span className="text-gray-300">★</span></div>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">"Compré la del Inter del triplete para mi novio y fue el mejor regalo de aniversario. Le encantó. Solo tardó 3 días."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">SM</div>
                <div>
                  <p className="font-bold text-brand-dark">Sara M.</p>
                  <p className="text-xs text-gray-500">Compradora Verificada · Bilbao</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="flex text-brand-gold mb-4 text-lg">★★★★★</div>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">"Tengo ya 5 camisetas de FUTX. La atención al cliente es brutal, me resolvieron una duda en minutos. 100% recomendado."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-300 rounded-full flex items-center justify-center text-brand-dark font-bold text-sm">DL</div>
                <div>
                  <p className="font-bold text-brand-dark">David L.</p>
                  <p className="text-xs text-gray-500">Comprador Verificado · Tenerife</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
            <div>
              <p className="text-4xl font-heading font-black text-brand-dark">+2.500</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Pedidos Entregados</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-black text-brand-dark">4.9/5</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Valoración Media</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-black text-brand-dark">24-48h</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Envío Express</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-black text-brand-dark">30 días</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Garantía Total</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
