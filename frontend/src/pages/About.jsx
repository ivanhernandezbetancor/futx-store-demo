import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-black text-brand-dark uppercase text-center mb-12">Sobre Nosotros</h1>
      
      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          Bienvenido a <strong>FUTX STORE</strong> (inspirados en la pasión del fútbol), sentimos tu pasión y nuestro objetivo es proporcionarte todo lo que necesitas para seguir el deporte rey. FUTX es el hogar del fútbol online. Los colores de tu club corren por nuestras venas. Cuando pienses en fútbol, piensa en FUTX: lo tenemos todo.
        </p>

        <p>
          Especialistas en fútbol de renombre mundial y autoridad en nuestro campo, albergamos una enorme cantidad de réplicas de equipaciones históricas de las grandes ligas: Barcelona, Real Madrid, Atlético de Madrid, Arsenal, Chelsea, Liverpool, Manchester City, Manchester United y Tottenham Hotspur, Bayern Munich, Borussia Dortmund, PSG... entre otros.
        </p>

        <p>
          Nos complace ofrecer una enorme gama de impresiones de jugadores, así que si eres fan de los grandes históricos como Maradona, Pelé, Zidane, Ronaldinho, o de los ídolos contemporáneos como Cristiano Ronaldo o Lionel Messi, FUTX puede ayudarte a mostrar tu pasión por los jugadores como nunca antes.
        </p>

        <p>
          Con sede y conexiones internacionales, ofrecemos soluciones a todo el mundo. Nos mantenemos al día de todas las novedades para ofrecer lo mejor del mercado vintage y retro.
        </p>

        <p>
          A nivel internacional, enviamos a más de 140 países, proporcionando experiencia en los principales recintos de fútbol.
        </p>

        <div className="bg-brand-light p-8 rounded-xl mt-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Contactar con nosotros</h2>
          <p className="mb-4">Si desea hablar con uno de nuestros agentes, póngase en contacto con nosotros vía chat web o email.</p>
          <h3 className="font-bold text-brand-dark mt-6 mb-2">Nuestro horario de apertura es:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lunes a Viernes: 9:00h a 21:00h</li>
            <li>Sábado y Domingo: 9:00h a 15:00h</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 italic">Nota: Los horarios corresponden a la hora local de España.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
