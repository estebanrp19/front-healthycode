import Image from "next/image";

const Gallery = () => {
  const images = [
    "/prueba1.jpg",
    "/prueba2.jpg",
    "/prueba3.jpg",
    "/prueba4.jpg",
    "/prueba5.jpg",
    "/prueba6.jpg",
    "/prueba7.jpg",
    "/prueba8.jpg",
  ];

  return (
    <div>
      <h1 className="text-center text-[30px] font-medium text-[#33aadd] my-4">
        Nuestra Instalación
      </h1>
      <section
        className="overflow-hidden grid grid-cols-2 md:grid-cols-4"
        id="galeria"
      >
        {images.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="responsive"
              width={1000}
              height={1000}
              className="opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
