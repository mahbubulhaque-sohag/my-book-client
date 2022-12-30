import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {
    const[posts, setPosts] = useState([]);
   
    useEffect(()=>{
        fetch('https://my-book-server-eta.vercel.app/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    console.log(posts)
    
    return (
     
            <div className='flex flex-col gap-2 items-center'>
            {
                posts?.map(post => <MediaCard 
                key={post._id}
                post={post}></MediaCard>)
            }
        </div>
        
    );
};

export default Media;