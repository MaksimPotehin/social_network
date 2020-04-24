import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const AddProfilePost = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'textarea'} name={'newPost'} component={'textarea'} cols="40" rows="5"></Field>
            <button>Send</button>
        </form>
    )
}

const MyPosts = (props) =>{
    let state = props.profilePage;

    let onAddMessage = (fromData) => {
        let text = fromData.newPost
        props.addPost(text)
    }

    let AddReduxProfilePost = reduxForm({form:'profilePost'})(AddProfilePost)

    return(
            <div>
                <h3>My posts</h3>
                <div className={s.new_post_block}>
                    <AddReduxProfilePost onSubmit={onAddMessage}/>
                </div>
                <Post posts={state.postsData}/>
            </div>
    )
}
export default MyPosts