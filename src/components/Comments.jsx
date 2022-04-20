import { useEffect, useState } from "react";
import {getArticleId, getUsers, getComments, patchArticleId, postArticleComment} from '../utils/api'
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
        fetch(`https://tavelar-app.herokuapp.com/api/articles/${article_id}/comments` , {
            method: 'POST',
            body: JSON.stringify({ body: newCommentBody , username: 'grumpy19' }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

return (
    <ul>
 <form onSubmit={newArticleComment}>
                   <label>


                   <input value={newCommentBody} onChange={(e => setNewCommentBody(e.target.value))} name='body' placeholder="comment" type='text'></input> 
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