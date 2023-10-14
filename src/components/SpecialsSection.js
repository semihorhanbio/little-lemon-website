import SpecialFoodCard from "./SpecialFoodCard";

const SpecialsSection = () => {
  return (
    <section className="mt-[70px] lg:mt-[140px]   md:mt-[70px] lg:max-w-[1100px] md:max-w-[830px] mr-auto ml-auto px-[16px] md:px-[12px] lg:px-[0px] ">
      <div className="text-7xl font-markazi  ">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-5xl md:text-6xl">This weeks specials!</h2>
          <button className="hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-9 py-3.5 rounded-2xl font-karla mr-[14px]">
            Online Menu
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="flex flex-col md:flex-row lg:gap-12  gap-6 ">
          <SpecialFoodCard
            foodName="Greek Salad"
            price="$12.99"
            description="The famous greek of crispy lettuce, peppers, olives, and our Chicago
          style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
            imageUrl="./icons_assets/greek salad.jpg"
          />
          <SpecialFoodCard
            foodName="Bruchetta"
            price="$5.99"
            description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil Lorem ipsum jals."
            imageUrl="./icons_assets/bruchetta.jpg"
          />
          <SpecialFoodCard
            foodName="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            imageUrl="./icons_assets/lemon dessert.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
