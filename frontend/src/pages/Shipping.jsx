import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-black text-brand-dark uppercase text-center mb-12">Política de Envíos y Devoluciones</h1>
      
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introducción</h2>
          <p>Las presentes condiciones ofrecen información previa al proceso de compra y complementan los términos y condiciones generales. La realización de cualquier compra comporta necesariamente la aceptación de estas condiciones sin reserva de ninguna clase.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Tramitación de Pedidos</h2>
          <p>Sólo podrán tramitar pedidos personas de al menos 18 años. Se informará previamente del importe exacto, incluidos los gastos de envío.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Disponibilidad</h2>
          <p>Si no fuera posible suministrar un producto, nos pondremos en contacto a la mayor brevedad para informarle y reintegrarle el importe pagado, o bien cancelar la totalidad del pedido si así lo prefiere.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Plazo de Entrega</h2>
          <p>Todos nuestros pedidos se entregan por un servicio de mensajería, en un plazo aproximado de 10-25 días hábiles. En caso de Canarias, puede ascender a 5-8 días adicionales. Una vez entregado, dispone de 15 días naturales para reclamar cualquier incidencia.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Impuestos Aduaneros</h2>
          <p>Nos encargamos de gestionar y pagar la mayoría de los impuestos aduaneros mediante nuestra empresa de transporte para evitar molestias al cliente final.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Devoluciones y Desistimiento</h2>
          <p>Cuenta con la posibilidad de ejercitar su derecho de desistimiento en el plazo de 15 días naturales, escribiéndonos a nuestro correo. Los productos deben encontrarse en perfectas condiciones y con sus etiquetas originales.</p>
          <p>No se admitirán devoluciones de productos personalizados, cajas misteriosas o productos de promociones especiales, salvo por defecto de fábrica.</p>
          <p>Los gastos de envío de las devoluciones por desistimiento irán a cargo del comprador.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Defectos de Fábrica / Daño en Transporte</h2>
          <p>Si recibe un producto dañado, debe notificarlo en las 24 horas siguientes a la recepción. Si es un defecto de fábrica, tramitaremos la sustitución por otro idéntico. Si no fuera posible, le abonaremos el importe.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Dorsales, Parches y Personalización</h2>
          <p>Las indicaciones en las notas del pedido relativas a cambiar dorsales o parches que no coincidan con la ficha del producto no serán válidas. Las camisetas se envían según la descripción oficial. No se admiten devoluciones de prendas personalizadas.</p>
        </section>
      </div>
    </div>
  );
};

export default Shipping;
