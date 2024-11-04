import { useEffect, useState } from "react";

const UseEffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Name: ${inputValue}`);
  }, [inputValue]);

  return (
    <div className="grid place-content-center place-items-center w-full min-h-screen bg-[#1A1A19]">
      <h1 className="text-white text-6xl mb-10">useEffect Challenge</h1>
      <p className="text-white text-2xl mb-5">{count}</p>
      <button
        className="bg-green-500 text-white py-2 px-4 text-lg mb-10"
        onClick={() => setCount(count + 1)}
      >
        Increament
      </button>
      <p className="mb-4 text-white text-lg">
        Name: <span className="font-bold">{inputValue}</span>
      </p>
      <input
        type="text"
        className="py-2 ps-2 pe-6 rounded outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default UseEffectChallenge;
