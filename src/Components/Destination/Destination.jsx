import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Destination = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (data) => {
    setSelectedDate(data);
  };
  return (
    <>
      <Navbar></Navbar>
      {/*  */}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-8xl font-bold font-beb">Cox's bazar</h1>
            <p className="py-6">
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
            </p>
          </div>
          {/* <div> */}
          {/* 1st option */}
          <div className="card shrink-0 h-[400px] w-full max-w-sm shadow-2xl bg-base-100 p-6">
            <h2>Origin</h2>
            <select className="font-mont font-bold select mt-4 w-full mx-auto max-w-xs bg-gray-200">
              <option disabled selected>
                Pick your Origin
              </option>
              <option>Dhaka</option>
              <option>Sylet</option>
              <option>Barishal</option>
              <option>Khulna</option>
              <option>Rajshahi</option>
            </select>
            <div>
              <h2 className="mt-4">Destination</h2>
              <select className="font-mont font-bold select mt-4 w-full mx-auto max-w-xs bg-gray-200">
                <option disabled selected>
                  Pick your Destination
                </option>
                <option>Cox'x Bazar</option>
                <option>Sundorbon</option>
                <option>Kuakata</option>
                <option>Senmartin</option>
                <option>Sreemongol</option>
              </select>
              <div className="flex mt-4 gap-2">
                <div className="space-y-2">
                  <h1>Form</h1>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/DD/YY"
                    className="bg-gray-200  w-full rounded-lg text-center p-3  "
                  />
                </div>
                <div className="space-y-2">
                  <h1>To</h1>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/DD/YY"
                    className="bg-gray-200 w-full rounded-lg text-center p-3  "
                  />
                </div>
              </div>

              <button className="btn btn-warning w-full mt-6">
                Start Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Destination;
