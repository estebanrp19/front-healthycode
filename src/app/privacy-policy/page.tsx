export default function PoliticasPrivacidad() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Políticas de Privacidad
      </h1>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
        <p className="text-gray-700">
          Bienvenido a la página web de Healthy Code. Nos
          comprometemos a proteger su privacidad y a ser transparentes sobre
          cómo funciona nuestro sitio web. Esta página web es únicamente
          informativa y no recopilamos datos personales de nuestros visitantes.
        </p>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          2. Información que No Recopilamos
        </h2>
        <p className="text-gray-700">
          Queremos que sepa que no recopilamos ninguna información personal a
          través de este sitio web, incluyendo pero no limitado a:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>Nombres</li>
          <li>Direcciones de correo electrónico</li>
          <li>Números de teléfono</li>
          <li>Direcciones postales</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Nuestro sitio web está diseñado únicamente para proporcionar
          información sobre nuestros servicios y planes estéticos.
        </p>
      </section>

      {/* <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">3. Uso de Cookies</h2>
        <p className="text-gray-700">
          Nuestro sitio web puede utilizar cookies para mejorar su experiencia
          de navegación. Estas cookies no recopilan información personal y se
          utilizan únicamente para recordar sus preferencias de visualización y
          proporcionar estadísticas anónimas sobre el uso del sitio.
        </p>
        <p className="mt-4 text-gray-700">
          Puede configurar su navegador para rechazar todas las cookies o para
          que le avise cuando se envíe una cookie. Sin embargo, si no acepta
          cookies, es posible que algunas partes de nuestro sitio web no
          funcionen correctamente.
        </p>
      </section> */}

      {/* <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          4. Enlaces a Sitios de Terceros
        </h2>
        <p className="text-gray-700">
          Nuestro sitio web puede contener enlaces a otros sitios web de
          interés. Sin embargo, una vez que haya utilizado estos enlaces para
          salir de nuestro sitio, debe tener en cuenta que no tenemos ningún
          control sobre ese otro sitio web. Por lo tanto, no podemos ser
          responsables de la protección y privacidad de cualquier información
          que proporcione al visitar dichos sitios, y dichos sitios no se rigen
          por esta declaración de privacidad.
        </p>
      </section> */}

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">3. Contacto</h2>
        <p className="text-gray-700">
          Si tiene alguna pregunta sobre estas políticas de privacidad o sobre
          cómo utilizamos nuestro sitio web, no dude en ponerse en contacto con
          nosotros:
        </p>
        <p className="mt-4 text-gray-700">
          Healthy Code
          <br />
          Correo electrónico: info@healthycode.com.co
          <br />
          Teléfono: (317) 665-3301
          <br />
          Dirección: Carrera 14 No. 94A-44, Local 1 Bogotá, Colombia
        </p>
      </section>
    </div>
  );
}
