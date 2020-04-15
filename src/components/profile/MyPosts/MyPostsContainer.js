import React from "react";
import {addPost, changeValue} from "../../../redux/Redusers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (text) => dispatch(addPost(text)),
        changeValuePost: (text) => {
            let action = changeValue(text);
            dispatch(action)
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer