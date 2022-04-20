import { useEffect, useState } from "react";
import {getArticleId, getUsers, getComments, patchArticleId, postArticleComment} from '../utils/api'
import {useParams} from 'react-router-dom'
const ArticleById = () => {
const [article, setArticle] = useState([])
const [user, setUser] = useState([])
const [comments, setComments] = useState([])
const [votes, setVotes] = useState(0)
const [newCommentBody, setNewCommentBody] = useState('');
const {article_id} = useParams()

useEffect(() => {
    getComments(article_id).then((comments) => {
        setComments(comments.comments)
    })
})

useEffect(() => {
    getArticleId(article_id).then((article) => {
        setArticle(article.article)
    })
},[])
useEffect(() => {
    getUsers().then((user) => { 
        setUser(user.users)
    })
},[])


const likeButton = (e) => {

e.preventDefault();
setVotes((currVotes) => currVotes + 1)
    fetch(`https://tavelar-app.herokuapp.com/api/articles/${article_id}`, {
        method: 'PATCH',
        body: JSON.stringify({inc_votes: 1 }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const disLikeButton = (e) => {
 
    e.preventDefault();
    setVotes((currVotes) => currVotes - 1)
    fetch(`https://tavelar-app.herokuapp.com/api/articles/${article_id}`, {
        method: 'PATCH',
        body: JSON.stringify({inc_votes: -1 }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    }
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


let image; 
    for (let i = 0; i<user.length; i++) {
      if(article.author === user[i].username) {
            image = user[i].avatar_url
      }
  }
    return (
   <div>
       <ul>
               <li className="article" key={article.article_id}>
                  <h3>{article.title}</h3>
                 
             <h5><img className="author-image" src={image}></img>by {article.author}</h5>
             
             <button className="topic-button">
                  <p>{article.topic}</p>
             </button>
                   <button>
                  <p>{article.body}</p>
                  <p>{article.created_at}</p>
                   </button> 
                  <p>comments: {article.comment_count}</p>
                  <p>votes: {article.votes + votes} <button value={article.votes} onClick={likeButton}>👍</button><button value={article.votes} onClick={disLikeButton}>👎</button></p>
               </li>
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
   </div>
        
    
    )
}

export default ArticleById;