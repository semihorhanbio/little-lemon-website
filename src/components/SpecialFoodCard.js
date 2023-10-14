import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
export default function SpecialFoodCard({
  foodName,
  price,
  description,
  imageUrl,
}) {
  return (
    <div className="w-[330px] md:h-[640px] lg:h-[600px] bg-white-highlight rounded-tr-2xl rounded-tl-2xl overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="w-1/1 h-[280px] object-cover hover:scale-110 transition duration-300"
          src={imageUrl}
          alt="Greek Salad"
        ></img>
      </div>
      <div className="flex flex-col gap-10 p-6 h-1/1 ">
        <div className="flex justify-between items-center">
          <h4 className="text-[22px] font-bold font-markazi">{foodName}</h4>
          <span className="text-pink-secondary font-semibold">{price}</span>
        </div>
        <p className="text-left text-black-highlight ">{description}</p>
        <span className="font-bold mt-7  mb-4 cursor-pointer w-fit">
          Order a delivery
          <FontAwesomeIcon className="ml-[10px]" icon={faTruck} />
        </span>
      </div>
    </div>
  );
}
