"use client";
import { ITreatment } from "@/interfaces";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function CardTreatments({ id, name, image, description, time }: ITreatment) {
  // Añadir props
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);

  const shortText =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <div
      key={id}
      className="bg-white shadow-lg rounded-lg border border-gray-200 max-w-sm"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">*Imagen de referencia</p>
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{name}</h2>
        <p className="text-gray-700 mb-4">
          {isExpanded ? description : shortText}
        </p>
        {description.length > 100 && (
          <button
            onClick={toggleText}
            className="text-[#33aadd] hover:underline"
          >
            {isExpanded ? "Leer menos" : "Leer más"}
          </button>
        )}
        <p className="text-lg font-medium mt-4">{time}</p>
      </div>
      <div className="flex justify-center text-white">
        <Link
          href="https://wa.me/+573176653301"
          className="bg-[#33aadd] py-1 px-2 mb-3 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#1eb2f2] duration-300"
        >
          <button className="flex items-center">
            <MessageCircle className="mr-2" /> Pedir Información
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardTreatments;
