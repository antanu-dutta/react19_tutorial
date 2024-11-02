import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const inputFields = [
    {
      type: "email",
      label: "Email",
      id: "email",
      placeholder: "Enter your email",
    },
    {
      type: "password",
      label: "Password",
      id: "password",
      placeholder: "Enter your password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {
      email: !user.email,
      password: !user.password,
    };
    setError(newError);
    if (!newError.email && !newError.password) console.log(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: false })); // Clear error on input change
  };

  return (
    <div className="w-full min-h-screen grid place-content-center">
      <div className="border-2 border-black shadow-lg rounded p-4 w-[350px]">
        <h1 className="text-center text-4xl mb-10">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {inputFields.map(({ type, label, id, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-2 text-lg font-semibold">
                {label}
              </label>
              <input
                type={type}
                name={id}
                id={id}
                value={user[id]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`outline-none border ${
                  error[id] ? "border-red-700" : "border-gray-600"
                } py-1 px-3 w-full rounded`}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-green-500 mt-5 py-2 px-5 rounded text-white font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
