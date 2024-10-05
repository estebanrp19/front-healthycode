import { ITestimonial } from "@/interfaces";
import { Star } from "lucide-react";

function Testimonial ({name, ranking, description}: ITestimonial) {
    return (
      <div className="flex justify-center">
        <div className="text-center max-w-[300px]">
          <h2 className="font-medium">{name}</h2>
          <div className="flex justify-center mb-2">
            {/* Renderizar estrellas según el ranking */}
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  index < ranking ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="font-extralight text-[15px]">
            {description}
          </p>
        </div>
      </div>
    );
}

export default Testimonial;