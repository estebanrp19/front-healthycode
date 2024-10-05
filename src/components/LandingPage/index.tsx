import Image from "next/image";

function LandingPage () {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/gradient.png"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-[50px] font-extralight mb-[-25px]">
              Bienvenida a
            </h1>
            <h2 className="text-[60px] font-medium mb-[-15px]">Healthy Code</h2>
            <h2 className="text-[30px] font-light mb-5">Innovación Estética</h2>
            <p className="text-lg md:text-xl font-extralight">
              Donde el cuidado de tu cuerpo y mente es nuestra prioridad. Aquí
              te brindamos un espacio dedicado a que te regales bienestar,
              belleza y equilibrio, porque mereces sentirte plena por dentro y
              por fuera.
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/1.jpg"
              alt="Imagen destacada"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
}

export default LandingPage;