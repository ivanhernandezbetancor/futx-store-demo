import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ShoppingCart, AlertTriangle, Star, Check } from 'lucide-react';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('L');
  const [isAdded, setIsAdded] = useState(false);
  
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: selectedSize }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-[#f8f9fa] p-6 flex items-center justify-center">
        {product.isLimited && (
          <div className="absolute top-3 left-3 bg-brand-gold text-brand-dark text-xs font-black px-3 py-1 rounded-sm z-10 shadow-sm uppercase tracking-wider">
            Edición Limitada
          </div>
        )}
        {product.stock <= 5 && (
          <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-black px-2 py-1 rounded-sm z-10 shadow-sm flex items-center gap-1">
            <AlertTriangle size={12} /> {product.stock} left
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy" 
          style={{ filter: product.filter || 'none' }}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
          <div className="flex gap-2 w-full justify-center">
            {sizes.map(size => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-colors ${selectedSize === size ? 'bg-brand-gold text-brand-dark' : 'bg-brand-dark/80 text-white hover:bg-brand-green backdrop-blur-sm'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{product.category}</span>
          <div className="flex text-brand-gold">
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
          </div>
        </div>
        
        <h3 className="text-base sm:text-lg font-heading font-bold text-brand-dark mb-1 leading-tight flex-grow group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-xs font-semibold mb-0.5">€{Math.round(product.price * 1.4)}.00</span>
            <span className="text-xl font-black text-brand-dark">€{product.price}</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className={`p-3 rounded-full transition-all shadow-md flex items-center justify-center
              ${isAdded 
                ? 'bg-brand-gold text-brand-dark scale-110' 
                : 'bg-brand-dark text-white hover:bg-brand-green hover:scale-105'
              }`}
            disabled={isAdded}
          >
            {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
