import { usePostContext } from "../context/PostContext";

/* eslint-disable react/prop-types */
const PostCard = ({ data }) => {
  const { id, body, title } = data;
  const { handleEditPost } = usePostContext();
  return (
    <div className="p-3 border-s border-white bg-[#21303c] rounded text-white">
      <p className="mb-7">{id}</p>
      <p className="mb-7">Title: {title}</p>
      <p>News: {body}</p>
      <div className="flex items-center gap-4 mt-10">
        <button
          className="bg-green-600 rounded py-2 min-w-32"
          onClick={() => handleEditPost(id)}
        >
          EDIT
        </button>
        <button className="bg-red-600 rounded py-2 min-w-32">DELETE</button>
      </div>
    </div>
  );
};

export default PostCard;
