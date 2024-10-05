import FacialTreatments from "@/components/FacialTreatments";
import NonInvasiveReducingTreatments from "@/components/NonInvasiveReducingTreatments";
import SpecialPackages from "@/components/SpecialPackages";

function Treatments () {
    
    return (
      <div className="mx-2">
        <h1 className="text-center text-[30px] font-medium text-[#33aadd] my-4">
          Nuestros Tratamientos
        </h1>
        <div>
          <h2 className="text-center text-[24px] font-medium mt-4">
            Tratamientos Faciales
          </h2>
          <p className="text-center mx-auto max-w-[500px] font-light">
            Para todo tipo de piel, ofrecemos tratamientos a la medida de sus
            necesidades. Experimenta el retroceder del tiempo con resultados
            duraderos, una piel joven si es posible. Tenemos la tecnología y los
            mejores especialistas para realizarlo.
          </p>
        </div>
        <FacialTreatments />

        <div>
          <h2 className="text-center text-[24px] font-medium mt-4">
            Paquetes Especiales
          </h2>
        </div>
        <SpecialPackages />

        <div>
          <h2 className="text-center text-[24px] font-medium mt-4">
            Tratamientos Reductores No Invasivos
          </h2>
        </div>
        <NonInvasiveReducingTreatments />
      </div>
    );
}

export default Treatments