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
          name: 'Nike Nigeria 1996 Reissue',
          price: 40.00,
          category: 'Selecciones (ProDirect)',
          image: '/images/product_jersey.png',
          filter: 'none', // Nigeria is green
          isLimited: true,
          stock: 3
        },
        {
          id: 2,
          name: 'Puma AC Milan 25/26 King',
          price: 32.00,
          category: 'Equipos (ProDirect)',
          image: '/images/product_jersey_red.png',
          filter: 'none', // Milan is red/black
          isLimited: false,
          stock: 12
        },
        {
          id: 3,
          name: 'adidas Man Utd 1990 Visitante',
          price: 110.00,
          category: 'Retro Premium (ProDirect)',
          image: '/images/product_jersey.png',
          filter: 'hue-rotate(180deg)', // Blue away kit
          isLimited: false,
          stock: 4
        },
        {
          id: 4,
          name: 'adidas Man Utd 1990 Local',
          price: 40.00,
          category: 'Retro Clásica (ProDirect)',
          image: '/images/product_jersey_red.png',
          filter: 'hue-rotate(340deg)', // Man utd Red
          isLimited: true,
          stock: 8
        },
        {
          id: 5,
          name: 'Joma Getafe CF Local 24/25',
          price: 60.00,
          category: 'LaLiga (Joma)',
          image: '/images/product_jersey_red.png',
          filter: 'hue-rotate(240deg) brightness(1.2)', // Getafe Blue
          isLimited: false,
          stock: 15
        },
        {
          id: 6,
          name: 'Joma Villarreal CF Local 24/25',
          price: 65.00,
          category: 'LaLiga (Joma)',
          image: '/images/product_jersey.png',
          filter: 'hue-rotate(60deg) saturate(1.5)', // Villarreal Yellow
          isLimited: true,
          stock: 5
        },
        {
          id: 7,
          name: 'Joma Atalanta BC Local 24/25',
          price: 70.00,
          category: 'Serie A (Joma)',
          image: '/images/product_jersey_red.png',
          filter: 'hue-rotate(220deg)', // Atalanta Blue/Black
          isLimited: false,
          stock: 9
        },
        {
          id: 8,
          name: 'Joma Torino FC Visitante 24/25',
          price: 65.00,
          category: 'Serie A (Joma)',
          image: '/images/product_jersey_red.png',
          filter: 'hue-rotate(320deg) contrast(1.1)', // Torino Granata/Maroon
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
