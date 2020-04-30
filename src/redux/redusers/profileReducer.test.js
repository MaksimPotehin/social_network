import React from 'react';
import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    postsData : [
        { id:1, message:'First post', likeCount: 12},
        { id:2, message:'Hey hey hey', likeCount: 9},
        { id:3, message:'Yo', likeCount: 34}
    ]
}

test('posts should be increment', () => {

    let action = addPost('test should be successful')
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4);
});

test('posts should be decrement', () => {

    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(2);
});

test('post message should be correct', () => {
    let action = addPost('NEW TEXT')
    let newState = profileReducer(state, action)

    expect(newState.postsData[3].message).toBe('NEW TEXT');
});
