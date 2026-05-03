import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-black text-brand-dark uppercase text-center mb-12">Política de Privacidad y Cookies</h1>
      
      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          Esta Política de Privacidad de Cookies es parte integrante de la Política de Protección de Datos de FUTX STORE, como responsable del Tratamiento. El acceso y la navegación en el sitio web implican la aceptación de nuestra Política.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Definición y función de las cookies</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en el dispositivo que utilice para navegar y que pueden guardar información relativa a la frecuencia con que visita la página, preferencias, etc. Esto nos permite mejorar la calidad y uso de nuestro sitio web.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Tipos de cookies que utilizamos</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookies propias y de terceros:</strong> Gestionadas por nosotros o entidades colaboradoras.</li>
          <li><strong>Cookies de sesión y persistentes:</strong> Temporales durante su visita o almacenadas por un tiempo para recordarle.</li>
          <li><strong>Cookies técnicas:</strong> Esenciales para comprar (ej. mantener el carrito).</li>
          <li><strong>Cookies de análisis:</strong> Como Google Analytics, para entender cómo interactúan los usuarios.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Gestión de cookies</h2>
        <p>
          Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador. Si no permite la instalación de cookies esenciales, es posible que no pueda completar el proceso de compra.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Chrome: Configuración &gt; Privacidad y seguridad</li>
          <li>Safari: Preferencias &gt; Privacidad</li>
          <li>Firefox: Opciones &gt; Privacidad &amp; Seguridad</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Privacidad y Protección de Datos</h2>
        <p>
          Tratamos sus datos personales (nombre, dirección, email) únicamente con la finalidad de procesar sus pedidos, enviarle notificaciones de envío y, si lo ha consentido, ofertas promocionales. Sus datos están encriptados y protegidos mediante certificados SSL.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
