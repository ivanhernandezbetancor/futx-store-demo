import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        const response = await axios.get(`${apiUrl}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-brand-light">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
        <div>
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-2 block">Nuevos Ingresos</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-dark">
            Joyas Recientes
          </h2>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <button className="bg-brand-dark text-white px-6 py-2 rounded-full font-bold hover:bg-brand-green transition-colors">
            Ver Todo
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
