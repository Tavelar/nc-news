import { useEffect, useState } from "react";
import {getArticleId, getUsers, patchUpvote, patchDownvote} from '../utils/api'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';
import Comments from '../components/Comments'
import Error from './Error'
const ArticleById = ({user}) => {
const [article, setArticle] = useState([])
const [users, setUsers] = useState([])
const [votes, setVotes] = useState(0)
const {article_id} = useParams()
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)
useEffect(() => {
    getArticleId(article_id).then((article) => {
        setArticle(article.article)
        setLoading(false)
    }).catch(() => setError(true))
},[article_id])
useEffect(() => {
    getUsers().then((user) => { 
        setUsers(user.users)
    }).catch(() => setError(true))
},[])


const likeButton = () => {

setVotes((currVotes) => currVotes + 1)
patchUpvote(article_id)
}
const disLikeButton = () => {
   
    setVotes((currVotes) => currVotes - 1)
    patchDownvote(article_id)
    }

let image; 
    for (let i = 0; i<users.length; i++) {
      if(article.author === users[i].username) {
            image = users[i].avatar_url
      }
  }
  if(error) {
    return (
        <Link to='*'>
        <Error />
        </Link>
    )
} else if (loading) {
    return <h1 className='loading-page'>Loading page</h1>
} {

    
    return (
        <div>



       <ul>
           <article key={article.article_id} className="single-article">
               <div className="single-parent">

              <div className="single-child-1">
                  <h3>{article.title}</h3>
                  <p>{article.topic}</p>
              </div>
              
                 <div className="single-child-2">
                 <img className="single-author-image" alt='broken' src={image}></img>
                 </div>
                 <h5 className="single-article-author">By {article.author}</h5>
               </div>
             
             
            
                   <div  className="article-body">

                  <p>{article.body}</p>
                   </div>
                   
                  <p>comments: {article.comment_count}</p>
                  <p>votes: {article.votes + votes} </p>
                  <p><button className="like-button"value={article.votes} onClick={likeButton}>👍</button><button className='dislike-button' value={article.votes} onClick={disLikeButton}>👎</button></p>

                  <Moment>{article.created_at}</Moment>
                
           </article>
              
               <Comments article_id={article_id} user={user} />
            
            </ul>
   </div>
        
    
        )
    }
}

export default ArticleById;