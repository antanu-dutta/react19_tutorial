/* eslint-disable react/prop-types */
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {
  // function for checking if the todo task is completed or not
  const handleTodoCheck = (id) => {
    const todo = todos.map((curElem) =>
      curElem.id === id
        ? { ...curElem, completed: !curElem.completed }
        : curElem
    );
    setTodos(todo);
    localStorage.setItem("todos", JSON.stringify(todo)); // setting the todo list to localstorage
  };

  // function for clearing everything from the todo array and the localstorage
  const handleClearAll = () => {
    setTodos([]);
    localStorage.clear();
  };

  // function for delete todo item
  const handleDeleteTodo = (id) => {
    const filteredTodo = todos.filter((curElem) => curElem.id !== id);
    setTodos(filteredTodo);
  };

  return (
    <>
      <ul className="w-[400px] mx-auto">
        {todos.map((curElem) => (
          <li
            key={curElem.id}
            className="flex items-center mb-5 justify-between bg-white p-2 text-black rounded"
          >
            <span
              className={`text-lg font-medium ${
                curElem.completed ? "line-through" : ""
              }`}
            >
              {curElem.title}
            </span>
            <div className="flex items-center gap-5">
              <button
                className="w-10 h-10 rounded-full bg-green-600 grid place-content-center text-2xl cursor-pointer"
                onClick={() => handleTodoCheck(curElem.id)}
              >
                <IoMdCheckmark />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-red-600 grid place-content-center text-2xl cursor-pointer"
                onClick={() => handleDeleteTodo(curElem.id)}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {todos.length > 0 ? (
        <button
          className="py-2 px-5 bg-red-500 rounded"
          onClick={handleClearAll}
        >
          Clear
        </button>
      ) : (
        <h1 className="text-2xl font-semibold tracking-wider text-gray-700">
          Your Todo is Empty
        </h1>
      )}
    </>
  );
};

export default TodoList;
