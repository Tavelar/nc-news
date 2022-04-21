import { useEffect, useState } from "react";
import {getArticleId, getUsers, patchUpvote, patchDownvote} from '../utils/api'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Comments from '../components/Comments'
const ArticleById = ({user}) => {
const [article, setArticle] = useState([])
const [users, setUsers] = useState([])
const [votes, setVotes] = useState(0)
const {article_id} = useParams()


useEffect(() => {
    getArticleId(article_id).then((article) => {
        setArticle(article.article)
    })
},[article_id])
useEffect(() => {
    getUsers().then((user) => { 
        setUsers(user.users)
    })
},[])


const likeButton = (e) => {
e.preventDefault();
setVotes((currVotes) => currVotes + 1)
patchUpvote(article_id)
}
const disLikeButton = (e) => {
    e.preventDefault();
    setVotes((currVotes) => currVotes - 1)
    patchDownvote(article_id)
    }

let image; 
    for (let i = 0; i<users.length; i++) {
      if(article.author === users[i].username) {
            image = users[i].avatar_url
      }
  }
  
    return (
   <div>
       <ul>
               <li className="article" key={article.article_id}>
                  <h3>{article.title}</h3>
                 
             <h5><img className="author-image" alt='broken' src={image}></img>by {article.author}</h5>
             
             <Link to={`/articles/topic/${article.topic}`} >
             <button className="topic-button">
                  <p>{article.topic}</p>
             </button>
             </Link>
                   <button>
                  <p>{article.body}</p>
                  <p>{article.created_at}</p>
                   </button> 
                  <p>comments: {article.comment_count}</p>
                  <p>votes: {article.votes + votes} <button value={article.votes} onClick={likeButton}>👍</button><button value={article.votes} onClick={disLikeButton}>👎</button></p>
               </li>
              
               <Comments article_id={article_id} user={user} />
            
            </ul>
   </div>
        
    
    )
}

export default ArticleById;