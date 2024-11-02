import { TodoTime } from "./TodoTime";
import { TodoFormList } from "./TodoFromList";

export const TodoContainer = () => {
  return (
    <>
      <div className="w-full min-h-screen p-3 bg-[#1A1A19] text-white">
        <div className="w-full text-center pt-10 flex flex-col items-center">
          <h1 className="text-4xl tablet:text-6xl laptop:text-5xl  font-semibold tracking-wider">
            Welcome to TODO
          </h1>
          <div className="mt-6">
            <TodoTime />
          </div>
          <div className="mt-10 w-full">
            <TodoFormList />
          </div>
        </div>
      </div>
    </>
  );
};
