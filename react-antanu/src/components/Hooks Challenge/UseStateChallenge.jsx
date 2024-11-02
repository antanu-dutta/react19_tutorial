import { useState } from "react";
import styled from "styled-components";

export const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleCountState = (type) => {
    if (!Number(inputValue)) return;
    if (type === "INCREAMENT") {
      setCount(count + +inputValue);
    }
    if (type === "DECREAMENT") {
      const nextCount = count - +inputValue;
      setCount(nextCount >= 0 ? nextCount : 0);
    }
  };

  const handleResetButton = () => {
    setCount(0);
    setInputValue(1);
  };

  return (
    <div className="w-full min-h-screen gird place-content-center place-items-center">
      <div className="shadow-2xl  rounded-xl p-6 border-2 border-gray-600 w-1/2">
        <h1 className="text-center text-6xl mb-10">useState Challenge</h1>
        <p>
          <span className="text-xl">Count: </span>
          <span className="text-blue-600 text-2xl">{count}</span>
        </p>
        <div className="flex items-center gap-4 mt-6">
          <label htmlFor="step" className="text-xl">
            Step:{" "}
          </label>
          <input
            type="text"
            id="step"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className="outline-none border-2 rounded border-gray-300 p-1 px-3"
          />
        </div>
        <div className="mt-10 flex justify-between gap-6">
          <Button onClick={() => handleCountState("INCREAMENT")}>
            Increament
          </Button>
          <Button
            onClick={() => handleCountState("DECREAMENT")}
            disabled={count === 0 ? true : false}
          >
            Decreament
          </Button>
          <Button onClick={handleResetButton}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

const Button = styled.button`
  border-radius: 10px;
  padding: 7px 10px;
  background-color: blue;
  color: white;
  font-size: 18px;
  flex: 1;
  transition: 0.3s linear;
  &:hover {
    background-color: rgb(78, 78, 160);
  }
`;
