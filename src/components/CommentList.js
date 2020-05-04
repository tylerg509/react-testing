import React from 'react'
import { useSelector } from 'react-redux'

export const CommentList = () => {
    const comments = useSelector(state => state.comments)
    
    const renderComments = () => {
        return comments.map(comment => {
            return <li key={comment}> {comment} </li>
        })
    }

    return (
        <div>
            <ul>
                {renderComments()}
            </ul>
        </div>
    )
}

export default CommentList;
