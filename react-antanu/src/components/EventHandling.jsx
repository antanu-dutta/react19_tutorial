export const EventHandling = () => {
  const handleButtonClick = (event) => {
    alert("Hey i am on Click event");
    console.log(event.target);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="text-2xl bg-yellow-500 text-black py-3 px-4 rounded m-4"
      >
        Click Me
      </button>
    </>
  );
};
