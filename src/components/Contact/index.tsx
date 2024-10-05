import { Mail, MapPin, Phone } from "lucide-react";

function Contact () {
    return (
      <div>
        <h1 className="text-center text-[30px] font-medium text-[#33aadd] my-4">
          Contacto
        </h1>
        <div className="mx-auto max-w-[300px] mb-3">
          <div>
            <h2 className="text-left font-medium text-[20px]">
              Información de Contacto
            </h2>
            <div className="flex mb-2">
              <Phone className="w-[18px] mr-2 text-[#33aadd]" />
              <span className="font-light">(317) 665-3301</span>
            </div>
            <div className="flex mb-2">
              <Mail className="w-[18px] mr-2 text-[#33aadd]" />
              <span className="font-light">info@healthycode.com.co</span>
            </div>
            <div className="flex mb-2">
              <MapPin className="w-[18px] mr-2 text-[#33aadd]" />
              <span className="font-light">
                Carrera 14 No. 94A-44, Local 1, Bogotá, Colombia
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[300px] mb-3">
          <div>
            <h2 className="text-left font-medium text-[20px]">
              Horario de Atención
            </h2>
            <div>
              <p className="font-light">Lunes a Viernes: 9:00am - 7:00 pm</p>
              <p className="font-light">Sábado: 10:00 am - 3:00 pm</p>
              <p className="font-light">Domingo: Cerrado</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[300px] mb-3">
          <div>
            <h2 className="text-left font-medium text-[20px]">
              Nustra Ubicación
            </h2>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.515749989237!2d-74.0517339251825!3d4.680040295294917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a9394c79479%3A0x52376c6fa30f7450!2sCra.%2014%20%2394a-44%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1727039957288!5m2!1ses!2sco"
                width="300"
                height="250"
                className="rounded"
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;