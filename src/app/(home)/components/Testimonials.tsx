"use client";
import { SectionWithContainer, TestimonialCard } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC = () => {
  return (
    <SectionWithContainer>
      <div className="w-full h-full bg-tertiary rotate-1 rounded-lg">
        <div className="w-full h-full bg-white p-8 -rotate-1 rounded-lg">
          <SliderSwip
            data={[1, 2, 3]}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000 }}
          >
            {() => <TestimonialCard />}
          </SliderSwip>
          {/* <TestimonialCard /> */}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
