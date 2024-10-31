import { useState } from "react";

export const UseStateChallenge = () => {
  const [user, setUser] = useState([
    { name: "Arjun", age: 25 },
    { name: "Meera", age: 30 },
    { name: "Kabir", age: 22 },
    { name: "Lila", age: 28 },
    { name: "Rahul", age: 35 },
    { name: "Anita", age: 27 },
    { name: "Vikram", age: 24 },
    { name: "Sara", age: 29 },
    { name: "Raj", age: 31 },
    { name: "Priya", age: 26 },
  ]);

  return (
    <div className="m-6 text-center">
      <h1 className="mb-7">User List</h1>
      <ul className="flex flex-col gap-7">
        {user.map((curElem, index) => (
          <li key={index}>
            {curElem.name} is {curElem.age} yeas old
          </li>
        ))}
      </ul>
    </div>
  );
};
