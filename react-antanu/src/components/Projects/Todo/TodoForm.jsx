import { useEffect } from "react";

/* eslint-disable react/prop-types */
const TodoForm = ({ input, setInput, todos, setTodos }) => {
  // Form submittion Function
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Preventing the default behaviour of form

    // checking if the input value is empty
    if (input === "") return alert("Please Enter a value");

    // checking if the input todo is already in todo list or not
    const todoAlreadyExists = todos.find(
      (curElem) => curElem.title.toLowerCase() === input.toLowerCase()
    );

    // alerting the user if the input todo already in todo list
    if (todoAlreadyExists) {
      alert("Todo Already Exist");
      setInput("");
      return;
    }

    // setting input todo in todo list
    setTodos([
      ...todos,
      { id: todos.length + 1, title: input, completed: false },
    ]);

    // clearing input value
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex items-center justify-center gap-6">
        <input
          type="text"
          className="ps-3 p-1 border-2 rounded w-[300px] outline-none text-black"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-green-500 p-2 px-6 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
