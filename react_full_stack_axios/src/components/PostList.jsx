import PostCard from "./PostCard";
import { memo } from "react";
import { usePostContext } from "../context/PostContext";

const PostList = () => {
  const { posts } = usePostContext();
  console.log("rendering");
  if (posts.length === 0) {
    return <h1 className="text-3xl text-white">Loading....</h1>;
  } else {
    return (
      <div className="grid grid-cols-3 gap-10">
        {posts.map((curElem, index) => (
          <PostCard key={index} data={curElem} />
        ))}
      </div>
    );
  }
};

export default memo(PostList);
