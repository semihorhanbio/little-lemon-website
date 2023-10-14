export default function TestimonialCard({ imgUrl, name, text, rating }) {
  return (
    <div className=" w-[255px] md:w-[320px] lg:w-[255px] text-left bg-white md:px-5 md:py-7 px-3 py-5 flex flex-col gap-3 rounded-xl hover:shadow-md transition-all duration-200 ease-in">
      <p>Rating - {rating}/5</p>
      <div className="flex  items-center">
        <img
          className="inline-block w-[45px] h-[45px] rounded-full object-cover"
          src={imgUrl}
          alt="person"
        />
        <span className="pl-2 font-bold">{name}</span>
      </div>
      <p className="text-black-highlight">{text}</p>
    </div>
  );
}
