import React from 'react';
import { HiThumbUp } from "react-icons/hi";
import Comment from './Comment';

const LikeButton = ({post,user,likeCount,setLikeCount}) => {

  

    const handleLike = (id, uid, likes, setLikeCount) => {
        console.log(likes)
        setLikeCount()
        const like = { likeCount: likes,  uid: uid };
        console.log(like);
        fetch(`http://localhost:5000/post/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(like),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
               setLikeCount(likeCount+1)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
       <div>
         <div className='flex justify-evenly'>
        <button onClick={() => handleLike(post._id, user?.uid, likeCount, setLikeCount,  setLikeCount(likeCount+1))}>
            <div className='flex gap-1 justify-center items-center'>
            {post.like > 0 && <p>{post.like}</p>}
            {post.like > 0 ? <p><HiThumbUp className="h-6 w-4 text-blue-500" /> </p>
            :
            <p><HiThumbUp className="h-6 w-4" /> </p>}
            </div> </button>
        
    </div> 
           <Comment post={post} user={user}/>
       </div>
    );
};

export default LikeButton;