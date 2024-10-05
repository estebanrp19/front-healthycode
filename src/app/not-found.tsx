import Link from "next/link";

import { Home } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-[#33aadd]">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            ¡Ups! Página no encontrada
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/">
            <button className="flex bg-[#33aadd] p-2 rounded-lg text-white hover:bg-gray-100 hover:border hover:border-[#33aadd] hover:text-[#33aadd]">
                <Home className="mr-1.5 w-[18px]" /> Volver al Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
