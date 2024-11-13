/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getPost } from "../PostApi";

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [inputValues, setInputValues] = useState({
    title: "",
    body: "",
    id: "",
  });

  const getPostsData = async () => {
    const response = await getPost();
    const data = await response.data;
    setPosts(data);
  };

  const handleEditPost = (id) => {
    const post = posts.find((curElem) => curElem.id === Number(id));
    console.log(post);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const value = {
    posts,
    setPosts,
    handleEditPost,
    inputValues,
    setInputValues,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;

export const usePostContext = () => {
  return useContext(PostContext);
};
