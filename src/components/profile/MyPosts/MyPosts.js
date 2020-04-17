import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) =>{
    let state = props.profilePage;
    let newPost = React.createRef();
    let onAddMessage = () => {
        let text = newPost.current.value;
        props.addPost(text)
    }

    let onPostChange = () =>{
        let text = newPost.current.value;
        props.changeValuePost(text)
    }

    return(
            <div>
                <h3>My posts</h3>
                <div className={s.new_post_block}>
                    <textarea ref={newPost} value={state.textareaValue} onChange={onPostChange}></textarea>
                    <button onClick={onAddMessage}>Add new</button>
                </div>
                <Post posts={state.postsData}/>
            </div>
    )
}
export default MyPosts