import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
export const ReservationSlot = ({ time }) => {
  return (
    <div className="p-4 w-[120px] h-[120px] bg-white-highlight rounded-md shadow-md">
      <p className="font-semibold">
        {" "}
        <FontAwesomeIcon className="pr-[4px]" icon={faClock} /> {time}
      </p>
      <p>Status: Available ✅</p>
    </div>
  );
};
