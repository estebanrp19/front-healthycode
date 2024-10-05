import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="bg-[#33AADD] bg-opacity-60 text-white">
        <div className="container mx-auto px-4 pt-3">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="font-regular text-lg mb-2">Dirección</h3>
              <p>Carrera 14 No. 94A-44, Local 1</p>
              <p>Bogotá, Colombia</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="font-regular text-lg mb-2">Contacto</h3>
              <p className="font-light">(317) 665-3301</p>
              <p className="font-light">(305) 260-6303</p>
              <p className="font-light">info@healthycode.com.co</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Horario</h3>
              <p>Lunes - Viernes: 9:00 am - 7:00 pm</p>
              <p>Sábado: 10:00 am - 3:00 pm</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
          <hr className="border-gray-300 mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm pb-3">
            <div className="mb-2 md:mb-0">
              <span className="font-ligth">
                {" "}
                © {new Date().getFullYear()} Healthy Code{" "}
              </span>
            </div>
            <div className="mb-2 md:mb-0">
              <Link href="https://estebanromero.vercel.app/">
                <span className="font-light">Diseñado por Esteban Romero</span>
              </Link>
            </div>
            <div>
              <Link href="/privacy-policy">
                Políticas de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
