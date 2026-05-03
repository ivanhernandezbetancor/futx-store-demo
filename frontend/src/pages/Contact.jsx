import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-black text-brand-dark uppercase text-center mb-6">Contacto</h1>
      <p className="text-center text-gray-600 mb-12">
        Para recibir atención profesional más rápida y personalizada recomendamos que contactéis con nuestros EXPERTOS. Así podremos contestaros y resolver todas vuestras dudas en la mayor brevedad posible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold text-2xl">
            ✉️
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">Correo</h3>
          <p className="text-gray-600 font-medium">contacto@futxstore.com</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold text-2xl">
            📍
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">Dirección</h3>
          <p className="text-gray-600 font-medium">Tarragona / España</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center md:col-span-2">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold text-2xl">
            🕒
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">Horario de Atención</h3>
          <p className="text-gray-600">Lunes – Viernes / 9:00 – 21:00</p>
          <p className="text-gray-600">Sábado y Domingo / 9:00 – 15:00</p>
        </div>
      </div>

      <div className="bg-brand-light p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Preguntas frecuentes sobre pedidos</h2>
        
        <div className="space-y-4 text-gray-600">
          <p><strong>Para modificar tu pedido:</strong> Ponte en contacto con nosotros lo antes posible.</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Si aún no has hecho el pago, te ayudaremos a cancelarlo.</li>
            <li>Si ya hiciste el pago, podrás modificar el pedido siempre que nuestros compañeros de almacén no lo hayan preparado. Son muy eficientes y pueden prepararlo en minutos.</li>
            <li>Si el pedido ya ha sido preparado o enviado no podremos cancelarlo, pero podrás hacer la devolución tras su entrega, en los siguientes 30 días.</li>
          </ul>

          <p><strong>Sobre los envíos:</strong> Nos esforzamos siempre en cumplir con los plazos de entrega. Sin embargo, a veces pueden producirse causas ajenas a nuestra voluntad. Si se ha superado el plazo:</p>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Comprueba que se han superado los plazos previstos (recuerda que productos personalizados tardan 2-4 días más).</li>
            <li>Revisa el estado con el código de seguimiento.</li>
            <li>Contacta con nuestro equipo para más información.</li>
          </ol>

          <p><strong>Para devoluciones:</strong> Deberá enviar un correo facilitando el número de pedido en el asunto desde el mail con el que hizo la compra. Por protección de datos, la solicitud no podrá ser gestionada de otra forma.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
