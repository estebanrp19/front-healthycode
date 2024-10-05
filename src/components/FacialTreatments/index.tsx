"use client"
import { useEffect, useState } from "react";
import CardTreatments from "@/components/CardTreatments";
import { ITreatment } from "@/interfaces";

function FacialTreatments() {
  const [facialTreatments, setFacialTreatments] = useState<ITreatment[]>(
    []
  );

  useEffect(() => {
    fetch("/treatments.json")
      .then((response) => response.json())
      .then((data) => {
        setFacialTreatments(data.facial_cleanings);
      })
      .catch((error) =>
        console.error("Error fetching facial treatments:", error)
      );
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center">
        {facialTreatments.map((treatment) => (
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

export default FacialTreatments;
