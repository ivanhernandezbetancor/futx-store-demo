import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      // Force mock data for the visual demo so we see the new AI images
      setProducts([
        {
          id: 1,
          name: 'CAMISETA SELECCIÓN JAPÓN 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite1.png',
          isLimited: true,
          stock: 3
        },
        {
          id: 2,
          name: 'CAMISETA SELECCIÓN UCRANIA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite2.jpg',
          isLimited: false,
          stock: 12
        },
        {
          id: 3,
          name: 'CAMISETA SELECCIÓN INGLATERRA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite3.png',
          isLimited: false,
          stock: 4
        },
        {
          id: 4,
          name: 'CAMISETA SELECCIÓN BÉLGICA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite4.png',
          isLimited: true,
          stock: 8
        },
        {
          id: 5,
          name: 'CAMISETA SELECCIÓN ITALIA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite5.png',
          isLimited: false,
          stock: 15
        },
        {
          id: 6,
          name: 'CAMISETA SELECCIÓN NIGERIA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite6.png',
          isLimited: true,
          stock: 5
        },
        {
          id: 7,
          name: 'CAMISETA SELECCIÓN JAMAICA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite7.jpg',
          isLimited: false,
          stock: 9
        },
        {
          id: 8,
          name: 'CAMISETA SELECCIÓN COSTA RICA 2026',
          price: 29.99,
          category: 'Mundial 2026',
          image: '/images/elite8.jpg',
          isLimited: true,
          stock: 1
        }
      ]);
      setLoading(false);
    };
    
    fetchProducts();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 4);

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
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-brand-dark text-white px-6 py-2 rounded-full font-bold hover:bg-brand-green transition-colors"
          >
            {showAll ? 'Ver Menos' : 'Ver Todas'}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
