"use client";
import { useEffect, useState } from "react";
import CardTreatments from "@/components/CardTreatments";
import { ITreatment } from "@/interfaces";

function SpecialPackages() {
  const [specialPackages, setSpecialPackages] = useState<ITreatment[]>([]);

  useEffect(() => {
    fetch("/treatments.json")
      .then((response) => response.json())
      .then((data) => {
        setSpecialPackages(data.special_packages);
      })
      .catch((error) =>
        console.error("Error fetching facial treatments:", error)
      );
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center">
        {specialPackages.map((treatment) => (
          <CardTreatments
            key={treatment.id}
            id={treatment.id}
            name={treatment.name}
            image={treatment.image}
            description={treatment.description}
            time={treatment.time}
          />
        ))}
      </div>
    </div>
  );
}

export default SpecialPackages;
