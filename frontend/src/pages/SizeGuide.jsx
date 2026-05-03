import React from 'react';

const SizeGuide = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-black text-brand-dark uppercase text-center mb-4">Guía de Tallas</h1>
      <p className="text-center text-gray-600 mb-12">
        Asegúrate de pedir la talla correcta. Las medidas son aproximadas y pueden variar de 1 a 2 cm debido a la fabricación.
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Talla</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Pecho (Ancho)</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Largo</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Altura recomendada</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-bold text-brand-dark">S</td>
                <td className="py-4 px-6">50 - 51 cm</td>
                <td className="py-4 px-6">71 - 73 cm</td>
                <td className="py-4 px-6">160 - 170 cm</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-bold text-brand-dark">M</td>
                <td className="py-4 px-6">52 - 53 cm</td>
                <td className="py-4 px-6">73 - 75 cm</td>
                <td className="py-4 px-6">170 - 175 cm</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-bold text-brand-dark">L</td>
                <td className="py-4 px-6">54 - 56 cm</td>
                <td className="py-4 px-6">76 - 77 cm</td>
                <td className="py-4 px-6">175 - 180 cm</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-bold text-brand-dark">XL</td>
                <td className="py-4 px-6">58 - 60 cm</td>
                <td className="py-4 px-6">78 - 81 cm</td>
                <td className="py-4 px-6">180 - 188 cm</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-bold text-brand-dark">XXL</td>
                <td className="py-4 px-6">62 - 64 cm</td>
                <td className="py-4 px-6">81 - 83 cm</td>
                <td className="py-4 px-6">188 - 195 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-light p-8 rounded-xl">
          <h3 className="text-xl font-bold text-brand-dark mb-4">👕 ¿Cómo medirse?</h3>
          <ul className="space-y-4 text-gray-600">
            <li><strong>Pecho:</strong> Toma una camiseta que te quede bien, ponla plana sobre la mesa y mide de axila a axila.</li>
            <li><strong>Largo:</strong> Mide desde la parte más alta del hombro (junto al cuello) hasta el borde inferior de la camiseta.</li>
          </ul>
        </div>
        <div className="bg-brand-light p-8 rounded-xl">
          <h3 className="text-xl font-bold text-brand-dark mb-4">⚠️ Nota sobre Versión Jugador</h3>
          <p className="text-gray-600">
            Si la camiseta indica "Versión Jugador" (Player Issue), el corte es mucho más ajustado y ceñido al cuerpo. <strong>Recomendamos pedir siempre 1 o 2 tallas más</strong> de tu talla habitual si no te gusta ir muy apretado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
