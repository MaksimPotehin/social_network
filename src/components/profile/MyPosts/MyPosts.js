import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {minLengthCreator} from "../../../helper/FormValidation/FromValidation";

const minLength5 = minLengthCreator(5)

const AddProfilePost = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'textarea'} name={'newPost'} component={Textarea} validate={[minLength5]} cols="40" rows="5"/>
            <button>Send</button>
        </form>
    )
}

const MyPosts = (props) =>{
    let state = props.profilePage;

    let addPost = (fromData) => {
        console.log('11111')
        props.addPost(fromData.newPost)
    }

    let AddReduxProfilePost = reduxForm({form:'profilePost'})(AddProfilePost)

    return(
            <div>
                <h3>My posts</h3>
                <div className={s.new_post_block}>
                    <AddReduxProfilePost onSubmit={addPost}/>
                </div>
                <Post posts={state.postsData}/>
            </div>
    )
}
export default MyPosts