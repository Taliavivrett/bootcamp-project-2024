import React from 'react';

type IComment = {
    user: string;
    comment: string;
    time: Date | string | undefined; 
};

type CommentProps = {
    comment: IComment;
};

function parseCommentTime(time: Date | string | undefined): string {
    if (!time) {
        return "No date available"; 
    }


    const date = typeof time === "string" ? new Date(time) : time;


    if (isNaN(date.getTime())) {
        return "Invalid date"; 
    }


    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return date.toLocaleString('en-US', options);
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="comment">
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;

