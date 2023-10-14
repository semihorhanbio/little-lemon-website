import { useState } from "react";
import { submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";
import { ReservationSlot } from "./ReservationSlot";
import { useForm } from "react-hook-form";

export default function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  //
  let curr = new Date();
  curr.setDate(curr.getDate());
  let currDate = curr.toISOString().substring(0, 10);
  //
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(currDate);
  // const [time, setTime] = useState();
  // const [numberOfGuests, setNumberOfGuests] = useState(1);
  // const [occasion, setOccasion] = useState("Birthday");
  //
  const onSubmit = (data) => {
    console.log(data);
    submitAPI(data);
    navigate("/confirmed");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullNameField: fullName,
      emailField: email,
      dateField: date,
      occasionField: "Birthday",
      guestsField: 1,
    },
  });
  //
  return (
    <div className="flex md:flex-row flex-col justify-center items-center lg:gap-[230px] gap-[40px] md:py-[60px] py-[30px] bg-gray-primary md:gap-[50px] md:px-[20px] lg:px-[0px]">
      <form
        className="grid md:max-w-[440px] gap-[20px]  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-7xl text-yellow-primary font-markazi">
          Reservations
        </h1>
        <label
          htmlFor="full-name"
          className="font-semibold text-xl text-white-highlight"
        >
          Full Name
        </label>
        <input
          className="shadow -mt-[12px]  border rounded h-[50px] w-[320px] focus:outline-none focus:shadow-outline py-0 px-3 text-black-highlight leading-tight"
          type="text"
          id="full-name"
          placeholder="Full Name"
          {...register("fullNameField", {
            required: "Required",
            onChange: (e) => setFullName(e.target.value),
          })}
        />
        {errors.fullNameField && (
          <p className="text-red-500">{errors.fullNameField.message}</p>
        )}
        <label
          htmlFor="email"
          className="font-semibold text-xl text-white-highlight"
        >
          Email
        </label>
        <input
          className="shadow -mt-[12px]  border rounded h-[50px] w-[320px] focus:outline-none focus:shadow-outline py-0 px-3 text-black-highlight leading-tight"
          type="email"
          id="email"
          placeholder="example@email.com"
          {...register("emailField", {
            required: "Required",
            onChange: (e) => setEmail(e.target.value),
          })}
        />
        {errors.emailField && (
          <p className="text-red-500">{errors.emailField.message}</p>
        )}
        <label
          htmlFor="res-date"
          className="font-semibold text-xl text-white-highlight"
        >
          Choose date
        </label>
        <input
          className="shadow -mt-[12px]  border rounded h-[50px] w-[320px] focus:outline-none focus:shadow-outline py-2 px-3 text-black-highlight leading-tight"
          type="date"
          id="res-date"
          {...register("dateField", {
            required: true,
            onChange: (e) => {
              dispatch({ newDate: new Date(e.target.value) });
              return setDate(e.target.value);
            },
          })}
        ></input>
        <label
          htmlFor="res-time"
          className="font-semibold text-xl text-white-highlight"
        >
          Choose time
        </label>
        <select
          className="shadow -mt-[12px]  border rounded h-[50px]  w-[320px]  focus:outline-none focus:shadow-outline py-2 px-3 text-black-highlight leading-tight"
          id="res-time"
          {...register("timeField", { required: true })}
        >
          {availableTimes.map((time, index) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label
          htmlFor="guests"
          className="font-semibold text-xl text-white-highlight"
        >
          Number of guests
        </label>
        <input
          className="block -mt-[12px] w-[320px] h-[50px]  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...register("guestsField", { required: true })}
        ></input>
        <label
          htmlFor="occasion"
          className="font-semibold text-xl text-white-highlight"
        >
          Occasion
        </label>
        <select
          className="shadow -mt-[12px]  border rounded h-[50px]  w-[320px]  focus:outline-none focus:shadow-outline py-2 px-3  text-black-highlight leading-tight"
          id="occasion"
          {...register("occasionField", { required: true })}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <button
          type="submit"
          className=" hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-6 py-3  rounded-2xl mt-4"
        >
          Make Your Reservation
        </button>
      </form>
      <div className="md:px-[0px] px-[12px]">
        <h2 className="text-2xl text-white-highlight font-semibold mb-[20px] md:text-left text-center md:mt-[0px] mt-[24px] ">
          Available Tables
        </h2>
        <div className="grid gap-x-2 gap-y-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-h-[584px]">
          {availableTimes.map((time, index) => {
            return (
              <ReservationSlot key={time} time={time}>
                {time}
              </ReservationSlot>
            );
          })}
        </div>
      </div>
    </div>
  );
}
