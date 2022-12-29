import React from 'react';


const Comment = ({post, user}) => {
    const handleComment = (event) =>{
        
        event.preventDefault();
        let text = event.target.comment.value;
        const comment = {postId : post._id, text: text, name: user?.displayName, uid: user?.uid};
        console.log(comment);
        fetch(`http://localhost:5000/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
                text = ''
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        
        <div>
            <form onSubmit={handleComment} className='flex justify-center items-center gap-2'>
        <textarea type='text' className="textarea textarea-primary" name='comment' placeholder="type your comment"></textarea>
        <input className='btn btn-sm btn-primary' type='submit' value='Comment' />
        
        </form>
        </div>
    );
};

export default Comment;