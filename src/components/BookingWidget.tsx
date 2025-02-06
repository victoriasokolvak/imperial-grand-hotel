"use client";

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Calendar } from "./ui/Calendar";
import { Arrow } from "./ui/Arrow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const roomOptions = [1, 2, 3, 4];
const guestOptions = [1, 2, 3, 4];

export const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(new Date(2023, 11, 23));
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(2023, 11, 28));
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
  const [selectedGuest, setSelectedGuest] = useState(guestOptions[0]);

  const dateFields = [
    { label: "Check In", value: checkIn, onChange: setCheckIn },
    { label: "Check Out", value: checkOut, onChange: setCheckOut }
  ];

  return (
    <div className="absolute flex justify-center top-[616px] md:top-[530px] lg:top-[650px] max-w-[1440px] w-full">
      <div className="absolute md:right-[74px] xl:right-[120px] mx-auto bg-[#282828] w-[286px] xl:w-[406px]">
        <div className="space-y-6 lg:space-y-8 p-10 xl:p-[60px]">
          {dateFields.map(({ label, value, onChange }) => (
              <div key={label}>
                <label className="block mb-3 text-white font-forum text-[18px] xl:text-[24px] leading-none">{label}</label>
                <div className="relative w-full bg-[#302F2F]">
                  <DatePicker
                    selected={value}
                    onChange={onChange}
                    dateFormat="d MMMM yyyy"
                    className="bg-[#302F2F] text-[13px] xl:text-[14px] text-[#BF9766] py-3 px-4 w-full focus:outline-none"
                  />
                  <div className="absolute right-4 top-0 mt-[10px]">
                    <Calendar />
                  </div>
                </div>
              </div>
            ))}

          <div className="flex justify-between gap-12">
            <div className="w-1/2">
              <label className="block text-white font-forum text-[18px] xl:text-[24px] mb-3 leading-none">Room</label>
              <Dropdown 
                options={roomOptions}
                selected={selectedRoom}
                onSelect={setSelectedRoom}
              />
            </div>

            <div className="w-1/2">
              <label className="block text-white font-forum text-[18px] xl:text-[24px] mb-3 leading-none">Guest</label>
              <Dropdown
                options={guestOptions}
                selected={selectedGuest}
                onSelect={setSelectedGuest}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="flex justify-between items-center mt-1 xl:mt-[28px] gap-3 xl:gap-4 text-[#BF9766] text-[13px] xl:text-[16px] italic">
              Check Availability
              <div className="w-[7px] h-[14px]">
                <Arrow />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
