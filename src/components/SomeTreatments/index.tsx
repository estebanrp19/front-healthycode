import Link from "next/link";
import FacialTreatments from "../FacialTreatments";

function SomeTreatments () {
    return (
      <div>
        <h1 className="text-center text-[30px] font-medium text-[#33aadd] my-4">
          Algunos Tratamientos
        </h1>
        <FacialTreatments />
        <div className="flex justify-center">
          <Link
            href="/treatments"
            className="bg-[#33aadd] py-2 px-4 mb-3 rounded hover:bg-[#1eb2f2] mb-10"
          >
            <button className="text-white">Ver mas</button>
          </Link>
        </div>
      </div>
    );
}

export default SomeTreatments;