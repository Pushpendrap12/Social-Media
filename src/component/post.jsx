import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import {PostList} from "../store/store1";
const Post =({post})=>{
     const {deletePost} = useContext(PostList);
    return (<div>
        <div className="card  post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <AiFillDelete/>
  </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((item)=><span key ={item}className="badge text-bg-primary hashtag">{item}</span>)}
  </div>
  <div className="alert alert-warning reactions" role="alert">
  This post has been liked by {post.reactions.likes} and disliked by {post.reactions.dislikes} people.
</div>
</div>
    </div>)
}
export default Post;