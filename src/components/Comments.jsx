import { useEffect, useState } from "react";
import {getComments, postArticleComment, deleteComment} from '../utils/api'
import DeletePopup from "../components/DeletePopup"
import Moment from 'react-moment';
import 'moment-timezone';
const Comments = ({article_id, user}) => {
const [comments, setComments] = useState([]);
const [newCommentBody, setNewCommentBody] = useState('');
const [popupDeleteButton, setPopupDeleteButton] = useState(false)

// console.log(user);
useEffect(() => {
    getComments(article_id).then((comments) => {
        setComments(comments.comments)
    })
})

const newArticleComment = (e) => {
    e.preventDefault()

    postArticleComment(article_id, newCommentBody)
    .then((comment) => {
        console.log(comment);
    })
}

// console.log(deletePopup);
const handleDelete = (e) => {
    setPopupDeleteButton(true)
    
    
        deleteComment(e.target.value).then(() => {
            
       setComments((currComments) => {
        console.log(currComments);
        const newComments = []
        for(let i=0; i<currComments.length; i++) {
            if(currComments[i].comment_id !== +e.target.value) {
                newComments.push(currComments[i])
            }
        }
        console.log(newComments);
        return newComments
    })
})
    }
    
return (
    <ul>
 <form onSubmit={newArticleComment}>
                   <label>


                   <input value={newCommentBody.body} onChange={(e => setNewCommentBody(e.target.value))} name='body' placeholder="comment" type='text'></input> 
                   </label>
                   <button>post</button> 
               </form>
    {comments.map((comments) => {
        let deleteButton;
        let deletePopup;
        if(comments.author === 'grumpy19') {
            deleteButton = <button  onClick={handleDelete} value={comments.comment_id} className="comment-delete-button">Delete</button>;
            deletePopup = <DeletePopup  trigger={popupDeleteButton} setTrigger={setPopupDeleteButton} />;
        } else {
            deleteButton = null
        }
        return (
            <li className="article-comment"  key={comments.author + comments.created_at}>
               
                <p>auther: {comments.author}</p>
                <p>{comments.body}</p>
                <p>Date Created: <Moment>{comments.created_at}</Moment></p>
               
                <p>Votes: {comments.votes}</p>
                
                <div>
                {deleteButton}
                {deletePopup}
                </div>
                
            </li>
        )
    })}
    </ul>
)
}

export default Comments