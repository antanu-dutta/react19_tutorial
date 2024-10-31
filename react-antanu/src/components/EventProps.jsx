/* eslint-disable react/prop-types */
export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert(`Hey, thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Antanu")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = ({ onClick, onMouseEnter }) => {
  return (
    <>
      <div className="text-2xl m-6 flex items-center gap-5">
        <button className="py-2 px-4 bg-green-400" onClick={onClick}>
          Greet
        </button>
        <button className="py-2 px-4 bg-yellow-400" onMouseOver={onMouseEnter}>
          Hover Me
        </button>
      </div>
    </>
  );
};
