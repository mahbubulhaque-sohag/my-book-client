import React from 'react';

const CommentList = ({comment}) => {
    console.log(comment)
    return (
        <div>
            <p>{comment.text}</p>
        </div>
    );
};

export default CommentList;