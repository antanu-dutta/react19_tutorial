import { useState } from "react";

const Resgistration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const inputFields = [
    {
      inputType: "text",
      inputLabelName: "Firstname",
      inputID: "firstName",
      inputPlaceHolder: "Enter your firstname",
      inputValue: user.firstName,
    },
    {
      inputType: "text",
      inputLabelName: "Lastname",
      inputID: "lastName",
      inputPlaceHolder: "Enter your lastname",
      inputValue: user.lastName,
    },
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
    {
      inputType: "text",
      inputLabelName: "Phone Number",
      inputID: "phoneNumber",
      inputPlaceHolder: "Enter your phone number",
      inputValue: user.phoneNumber,
    },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="w-full min-h-screen grid place-content-center place-items-center">
      <div className="border-2 border-black shadow-lg rounded p-4 w-[550px]">
        <h1 className="text-center text-4xl mb-10">Registration FORM</h1>
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
                  className="outline-none border border-gray-600 py-1 px-3 w-full rounded"
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

export default Resgistration;
