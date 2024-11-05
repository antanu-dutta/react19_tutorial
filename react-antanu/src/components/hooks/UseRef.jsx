import { useRef } from "react";

export const UseRef = () => {
  const input = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = input.current.value ? input.current.value : "Unknown";
    console.log(`Your name is ${name}`);
    input.current.value = "";
  };

  return (
    <div className="w-full min-h-screen grid place-content-center place-items-center">
      <div className="border border-gray-500 rounded shadow-lg p-5">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-2 py-1 outline-none border-2 border-green-500 me-8"
            ref={input}
          />
          <button type="submit" className="bg-green-500 text-white px-3 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
