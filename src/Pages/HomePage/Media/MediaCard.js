import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { authContext } from '../../../context/AuthProvider';
import { HiThumbUp } from "react-icons/hi";
import LikeButton from './LikeButton';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CommentList from './CommentList';

const MediaCard = ({ post }) => {
    const { user } = useContext(authContext);
    const [likeCount, setLikeCount] = useState(1);
    // console.log(likeCount)

    // const { isLoading, error, data = [] } = useQuery({
    //     queryKey: ['comment/:id',],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/comment/${post._id}`);
    //         const data = await res.json();
    //         return data
    //     }
    // })
    // console.log(data)
    // if (isLoading) return <progress className="progress w-56"></progress>;
    const[comments, setComments] = useState([]);
useState( ()=>{
    fetch(`http://localhost:5000/comment/${post._id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setComments(data)
    })
},[])

    return (
        <div className="card h-full w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex gap-2 justify-between'>
                    <img className='rounded-full w-12' src={post?.user?.userPhoto} alt='user' />
                    <h2 className="card-title">{post?.user?.userName}</h2>
                </div>
                <div>
                    {
                        post.text.length > 100 ?
                            <>
                                <p className="truncate ...">{post.text.slice(0, 100)}</p>
                                <Link to={`/mediaDetails/${post._id}`}>see more</Link>
                            </>
                            :
                            <p>{post.text}</p>
                    }
                </div>
                <figure><img className='h-64 w-96' src={post.image} alt="post" /></figure>
            </div>
            <LikeButton post={post}
                user={user}
                likeCount={likeCount}
                setLikeCount={setLikeCount}></LikeButton>
            <div className='mx-5 h-full w-96 mb-2'>
                <h4 className='text-primary '>{comments?.length} {comments?.length > 0 ? 'comments' : 'comment'}</h4>
                {
                    comments.map(comment=><CommentList key={comment._id}
                    comment={comment}></CommentList>)
                }
            </div>
        </div>
    );
};

export default MediaCard;