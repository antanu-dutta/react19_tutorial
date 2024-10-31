import { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <div className="text-3xl flex items-center flex-col gap-8 justify-center h-screen w-full">
        <h1>{count}</h1>
        <button
          onClick={handleButtonClick}
          className="bg-green-500 p-4 text-3xl px-7"
        >
          Increament
        </button>
      </div>
    </>
  );
};
