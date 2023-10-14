import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <div className="mt-[40px] md:mt-[100px] bg-white-highlight md:pb-[50px] md:pt-[10px]">
      <div className=" md:w-[820px] lg:w-[1100px] mr-auto ml-auto md:py-[100px] pb-[40px] px-[16px] py-[16px] text-center">
        <h3 className="text-5xl md:text-center font-markazi mb-[12px]">
          Testimonials
        </h3>
        <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center md:flex-row gap-6 md:mt-10 md:grid md:grid-cols-2 md:place-items-center md:max-w-[830px]">
          <div>
            <TestimonialCard
              name="Duman"
              rating="5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam."
              imgUrl="./icons_assets/duman.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Samir"
              rating="4.5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam."
              imgUrl="./icons_assets/samir.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Yusron"
              rating="4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam."
              imgUrl="./icons_assets/yusron.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Alexander"
              rating="4.2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam."
              imgUrl="./icons_assets/alexander.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
