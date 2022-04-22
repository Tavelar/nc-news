import { useEffect, useState } from "react";
import {getComments, postArticleComment, deleteComment} from '../utils/api'
import DeletePopup from "../components/DeletePopup"
import Moment from 'react-moment';
import 'moment-timezone';
import {Link} from 'react-router-dom'
import Error from './Error'
const Comments = ({article_id, user}) => {
const [comments, setComments] = useState([]);
const [newCommentBody, setNewCommentBody] = useState('');
const [popupDeleteButton, setPopupDeleteButton] = useState(false)
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

useEffect(() => {
    getComments(article_id).then((comments) => {
        setComments(comments.comments)
       setLoading(false)
    }).catch(() => setError(true))
   

})

const newArticleComment = (e) => {
    e.preventDefault()

    postArticleComment(article_id, newCommentBody, user)
    .then(() => {
        
        setNewCommentBody('')
    }).catch(() => setError(true))
}


const handleDelete = (e) => {
    setPopupDeleteButton(true)
    
    
        deleteComment(e.target.value).then(() => {
            
       setComments((currComments) => {
        
        const newComments = []
        for(let i=0; i<currComments.length; i++) {
            if(currComments[i].comment_id !== +e.target.value) {
                newComments.push(currComments[i])
            }
        }
       
        
        return newComments
    })
})
    }
    
    if(error) {return (
            <Link to='*'>
            <Error />
            </Link>
        )
    } else if (loading) {
        return <h1 className='loading-page'>Loading page</h1>
    } {

        
        return (
            <ul>
 <form onSubmit={newArticleComment}>
                   <label>


                   <input required value={newCommentBody} onChange={(e => {setNewCommentBody(e.target.value)})} name='body' placeholder="comment" type='text'></input> 
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
               
            <Link to={`/comments/${comments.comment_id}`}>
                <button className="comment-view-button" >View comment</button>
            </Link>
                <p>auther: {comments.author}</p>
                <p>{comments.body}</p>
                <p>Date Created: <Moment>{comments.created_at}</Moment></p>
               
                <p>Votes: {comments.votes}</p>
                
                <div>
                </div>
              
                {deleteButton}
                {deletePopup}
                
            </li>
        )
    })}
    </ul>
)
}
}

export default Comments