import { useEffect, useState } from "react";
import {getComments, postArticleComment} from '../utils/api'
const Comments = ({article_id}) => {
const [comments, setComments] = useState([]);
const [newCommentBody, setNewCommentBody] = useState('');

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

return (
    <ul>
 <form onSubmit={newArticleComment}>
                   <label>


                   <input value={newCommentBody.body} onChange={(e => setNewCommentBody(e.target.value))} name='body' placeholder="comment" type='text'></input> 
                   </label>
                   <button>post</button> 
               </form>
    {comments.map((comments) => {
        
        return (
            <li className="article-comment" key={comments.author + comments.created_at}>
               
                <p>auther:{comments.author}</p>
                <p>{comments.body}</p>
                <p>{comments.created_at}</p>
                <p>{comments.votes}</p>
                
                
            </li>
        )
    })}
    </ul>
)
}

export default Comments