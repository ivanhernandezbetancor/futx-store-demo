import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">Tu carrito está vacío</h2>
        <Link to="/" className="text-brand-green font-bold hover:underline">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-8 uppercase">Finalizar Compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-brand-dark text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span> 
                Dirección de Envío
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-brand-green" required />
                  <input type="text" placeholder="Apellidos" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-brand-green" required />
                </div>
                <input type="text" placeholder="Dirección completa (Calle, Número, Piso)" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-brand-green" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Ciudad" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-brand-green" required />
                  <input type="text" placeholder="Código Postal" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-brand-green" required />
                </div>
                <input type="tel" placeholder="Teléfono" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-brand-green" required />
              </form>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-brand-dark text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span> 
                Pago Seguro
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4 flex flex-col items-center justify-center text-gray-500 gap-2">
                <Lock size={32} className="text-brand-green" />
                <p className="text-sm font-medium text-center">El pago real mediante Stripe se habilitará en la versión de producción.</p>
              </div>
              <button className="w-full btn-primary py-4 text-lg mt-4 flex justify-center items-center gap-2">
                PAGAR €{total.toFixed(2)} Y COMPLETAR PEDIDO <ShieldCheck size={20} />
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Resumen del Pedido</h2>
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain bg-gray-50 rounded" />
                    <div className="flex-1">
                      <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">Talla: {item.size} | Cant: {item.quantity}</p>
                    </div>
                    <p className="font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 pt-6 border-t border-gray-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Envío (24-48h)</span>
                  <span className="font-medium text-brand-green">{total >= 60 ? 'Gratis' : '€4.99'}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-brand-dark">€{(total + (total >= 60 ? 0 : 4.99)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
