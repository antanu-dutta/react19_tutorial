import { useReducer } from "react";

export const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREAMENT":
        return (state += 1);
      case "DECREAMENT":
        return state - 1 === 0 ? (state = 0) : (state -= 1);
      default:
        break;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="w-full min-h-screen grid transition-all place-content-center place-items-center">
      <div className="flex flex-col gap-6">
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INCREAMENT" })}>
          Increament
        </button>
        <button onClick={() => dispatch({ type: "DECREAMENT" })}>
          Decreament
        </button>
      </div>
    </div>
  );
};
