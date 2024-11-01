import { TodoTime } from "./TodoTime";
import { TodoFormList } from "./TodoFromList";

export const TodoContainer = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#1A1A19] text-white">
        <div className="mx-auto w-1/3 text-center pt-10 flex flex-col items-center">
          <h1 className="text-5xl font-semibold tracking-wider">
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
