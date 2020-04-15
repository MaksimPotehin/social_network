import React from "react";
import s from '../MyPosts.module.css'


const Post = (props) =>{
    return(
        <div className={s.postItem}>
            {props.posts.map((item) =>
                <div className={`${s.avatar} ${s.item}`} key={Math.random() + item.id}>
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
                {item.message}
                <span> liks </span>
                <span>{item.likeCount}</span>
            </div>)}
        </div>
    )
}
export default Post