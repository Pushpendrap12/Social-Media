import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { useRef } from "react";
import {PostList} from "../store/store1";
import { useContext } from "react";

const CreatePost = () => {
   const {addPost} = useContext(PostList);
   const UserIdElement =   useRef();
   const PostTitleElement = useRef();
   const PostBodyElement = useRef();
   const like = useRef();
   const dislike = useRef();
   const TagsElement=  useRef();
   const handleSubmit = (event)=>{
   event.preventDefault();
   const userId = UserIdElement.current.value;
   const PostTitle = PostTitleElement.current.value;
   const PostBody = PostBodyElement.current.value;
   const Reactions = {
     likes:like.current.value,
     dislikes:dislike.current.value,
   };
   const Tags   =    TagsElement.current.value.split(" ");
     PostBodyElement.current.value=""
     UserIdElement.current.value = "";
     PostTitleElement.current.value = "";
     like.current.value="";
     dislike.current.value="";
     TagsElement.current.value=  "";
     const post1 = {
      title: PostTitle,
        userId: userId,
        body:PostBody,
        tags:Tags,
     }
     post1.reactions = Reactions;
     fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post1)
    })
    .then(res => res.json())
    .then((post)=>
      { 
        addPost(post)});
 }
  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="user-id"
            placeholder="How are you feeling today"
            ref = {UserIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today"
            ref = {PostTitleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            rows="4"
            placeholder="How are you feeling today"
            ref = {PostBodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            likes.
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            placeholder="How many people reacted to this post"
            ref = {like}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Dislikes
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            placeholder="How many people reacted to this post"
            ref = {dislike}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enetr you hashtags.
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please Enter your tags using space"
            ref = {TagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
