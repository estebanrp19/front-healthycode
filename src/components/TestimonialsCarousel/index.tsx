"use client";
import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial";
import { ITestimonial } from "@/interfaces";
import { ChevronLeft, ChevronRight } from "lucide-react";

function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/testimonials.json");
      const data: ITestimonial[] = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      <h1 className="text-center text-[30px] font-medium text-[#33aadd] my-4">
        Testimonios
      </h1>
      <div className="flex justify-center mb-5">
        {testimonials.length > 0 && (
          <div className="text-center max-w-[300px]">
            <Testimonial
              id={testimonials[currentIndex].id}
              ranking={testimonials[currentIndex].ranking}
              name={testimonials[currentIndex].name}
              description={testimonials[currentIndex].description}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevTestimonial}
                className="px-2 py-2 bg-[#33aadd] text-white rounded-[250px]"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="px-2 py-2 bg-[#33aadd] text-white rounded-[250px]"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
