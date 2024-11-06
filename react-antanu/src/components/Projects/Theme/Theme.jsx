import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("Light");
  const handleSwitchButton = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };
  return (
    <div
      className={`w-full min-h-screen grid transition-all place-content-center place-items-center ${
        theme === "Light" ? "bg-white text-black" : "bg-[#1A1A1D] text-white"
      }`}
    >
      <div className="text-center flex flex-col gap-7">
        <h1 className="text-4xl">Dark Light Mode Website</h1>
        <h3 className="text-3xl font-medium">Hello! Viewers</h3>
        <button
          className="bg-blue-600 text-white rounded text-4xl px-7 py-3"
          onClick={handleSwitchButton}
        >
          Swtich to {theme === "Dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Theme;
