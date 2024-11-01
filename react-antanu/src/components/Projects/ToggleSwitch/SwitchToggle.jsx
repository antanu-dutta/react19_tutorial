import { useState } from "react";

export const SwitchToggle = () => {
  const [swichToggle, setSwitchToggle] = useState(false);

  const handleSwitchToggle = (e) => {
    e.stopPropagation();
    setSwitchToggle(!swichToggle);
  };

  return (
    <>
      <div className="w-full h-screen grid place-content-center">
        <div
          className="rounded-full p-5 cursor-pointer bg-green-400 w-80"
          onClick={handleSwitchToggle}
        >
          <div
            className={`rounded-full  border-white border-4 w-[70px] h-[70px] duration-300 grid place-content-center text-2xl font-bold relative ${
              !swichToggle ? "bg-red-700 -left-0.5" : "bg-transparent left-40"
            }`}
          >
            {swichToggle ? "ON" : "OFF"}
          </div>
        </div>
      </div>
    </>
  );
};
