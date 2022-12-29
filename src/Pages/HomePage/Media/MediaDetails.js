import React, { useContext } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider';
import LikeButton from './LikeButton';

const MediaDetails = () => {
    const {user} = useContext(authContext);
    const post = useLoaderData();
    
    
    console.log(post)
    return (
        <div className="card container mx-auto bg-base-100 shadow-xl h-[500px]">
            <div className="card-body">
                <div className='flex gap-2 justify-center'>
                    <img className='rounded-full w-12' src={post?.user?.userPhoto} alt='user' />
                    <h2 className="card-title">{post?.user?.userName}</h2>
                </div>
                <div>
                    {
                    
                        <p>{post.text}</p>
                    }
                </div>
            </div>
            <figure><img className='h-full w-96' src={post.image} alt="post" /></figure>
            <LikeButton post={post}></LikeButton>
        </div>
    );
};

export default MediaDetails;