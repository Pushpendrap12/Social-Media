import { act } from "react";
import { createContext, useReducer ,useState,useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletePost: () => {},
  fetchData: false,
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DElETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.PostId
    );
  } else if (action.type === "Create_Post") {
    // console.log(action.payload)
    newPostList = [...currPostList, action.payload];
    // console.log(newPostList)
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (post) => {
    // const reac = {likes:3,
    //   dislikes:4}
    // post.reactions=reac;
    dispatchPostList({
      type: "Create_Post",
      payload: post,
    });
  };
  const deletePost = (PostId) => {
    console.log(PostId);
    dispatchPostList({
      type: "DElETE_POST",
      payload: {
        PostId,
      },
    });
  };
  const addinitialposts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const [fetchData, setfetchData] = useState(false);
  useEffect(() => {
    setfetchData(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialposts(data.posts);
        setfetchData(false);
      });
  }, []);
  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetchData }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
