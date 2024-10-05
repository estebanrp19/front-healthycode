import Gallery from "@/components/Gallery";
import LandingPage from "@/components/LandingPage";
import SomeTreatments from "@/components/SomeTreatments";
import TestimonialCarousel from "@/components/TestimonialsCarousel";

function Page () {
  return (
    <div>
      <LandingPage />
      <SomeTreatments />
      <Gallery />
      <TestimonialCarousel />    
    </div>
  )
}

export default Page;