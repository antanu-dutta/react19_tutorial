import { usePostContext } from "../context/PostContext";

const AddForm = () => {
  const { setPosts, inputValues, setInputValues } = usePostContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...inputValues, id: prev.length + 1 }]);
  };

  return (
    <div className="rounded-lg bg-[#493628] p-5 w-[700px]">
      <form
        action=""
        className="flex items-center justify-between gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Add Title"
          className="bg-white p-2 rounded w-[300px] text-sm outline-none h-[40px]"
          value={inputValues.title}
          onChange={(e) =>
            setInputValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Add Post"
          className="bg-white p-2 rounded w-[300px] text-sm outline-none h-[40px]"
          value={inputValues.body}
          onChange={(e) =>
            setInputValues((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button className="bg-green-500 px-4 py-2 rounded h-[40px]">ADD</button>
      </form>
    </div>
  );
};

export default AddForm;
