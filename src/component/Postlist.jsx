import Post from "./post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostlistData } from "../store/store1";
import { Welcome } from "./Welcome";
import { Loading } from "./Loading";
const PostList = () => {
  const { postList, fetchData } = useContext(PostlistData);
  return (
    <>
      {fetchData && <Loading></Loading>}
      {!fetchData && postList.length === 0 && (
        <Welcome /*getpostfromserver={handleclick}*/></Welcome>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
