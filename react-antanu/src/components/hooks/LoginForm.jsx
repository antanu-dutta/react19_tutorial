import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });
  const inputFields = [
    {
      inputType: "email",
      inputLabelName: "Email",
      inputID: "email",
      inputPlaceHolder: "Enter your email",
      inputValue: user.email,
    },
    {
      inputType: "password",
      inputLabelName: "Password",
      inputID: "password",
      inputPlaceHolder: "Enter your password",
      inputValue: user.password,
    },
  ];
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newError = { email: !user.email, password: !user.password };
    setError(newError);

    if (!newError.email && !newError.password) {
      console.log(user);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen grid place-content-center place-items-center">
      <div className="border-2 border-black shadow-lg rounded p-4 w-[350px]">
        <h1 className="text-center text-4xl mb-10">Login</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-col gap-4">
            {inputFields.map((curElem, index) => (
              <div key={index}>
                <label
                  htmlFor={curElem.inputID}
                  className="block mb-2 text-lg font-semibold"
                >
                  {curElem.inputLabelName}
                </label>
                <input
                  type={curElem.inputType}
                  name={curElem.inputID}
                  id={curElem.inputID}
                  className={`outline-none border ${
                    error[curElem.inputID]
                      ? "border-red-700"
                      : "border-gray-600"
                  } py-1 px-3 w-full rounded`}
                  placeholder={curElem.inputPlaceHolder}
                  value={curElem.inputValue}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            ))}
          </div>
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
