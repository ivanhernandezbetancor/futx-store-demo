import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart, updateQuantity, closeCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 60;
  const progressToFreeShipping = Math.min((total / freeShippingThreshold) * 100, 100);
  const amountToFreeShipping = Math.max(freeShippingThreshold - total, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => dispatch(toggleCart())}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
        <div className="w-full h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-brand-dark text-white">
            <h2 className="text-xl font-heading font-bold flex items-center gap-2">
              <ShoppingBag size={24} />
              TU CARRITO ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
            <button 
              onClick={() => dispatch(toggleCart())}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Shipping Progress */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            {amountToFreeShipping > 0 ? (
              <p className="text-sm font-semibold text-center mb-2">
                ¡Te faltan <span className="text-brand-red">€{amountToFreeShipping.toFixed(2)}</span> para <span className="font-bold">ENVÍO GRATIS</span>!
              </p>
            ) : (
              <p className="text-sm font-bold text-center mb-2 text-brand-green">
                ¡Enhorabuena! Tienes ENVÍO GRATIS 🎉
              </p>
            )}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full transition-all duration-500 ${amountToFreeShipping === 0 ? 'bg-brand-green' : 'bg-brand-red'}`} 
                style={{ width: `${progressToFreeShipping}%` }}
              ></div>
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <ShoppingBag size={64} className="opacity-20" />
                <p className="text-lg font-semibold">Tu carrito está vacío</p>
                <button 
                  onClick={() => dispatch(toggleCart())}
                  className="btn-primary mt-4"
                >
                  Seguir Comprando
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-gray-50 pb-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain bg-gray-50 rounded-lg" />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-brand-dark text-sm leading-tight pr-4">{item.name}</h3>
                      <button 
                        onClick={() => dispatch(removeFromCart(item))}
                        className="text-gray-400 hover:text-brand-red transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Talla: <span className="font-bold">{item.size}</span></p>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button 
                          onClick={() => dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 }))}
                          className="px-2 py-1 text-gray-500 hover:text-brand-dark"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 }))}
                          className="px-2 py-1 text-gray-500 hover:text-brand-dark"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-brand-dark">€{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>€{total.toFixed(2)}</p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Impuestos incluidos. Los gastos de envío se calculan en la pantalla de pago.
              </p>
              <Link 
                to="/checkout" 
                onClick={() => dispatch(closeCart())}
                className="w-full btn-primary py-4 flex justify-center items-center gap-2 text-lg"
              >
                FINALIZAR COMPRA <ShoppingBag size={20} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
