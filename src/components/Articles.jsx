import { useEffect, useState } from "react";
import {getArticles, getTopics, getUsers, getSortedTopics} from '../utils/api'
import Sorter from "../components/Sorter"
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';
import Error from '../components/Error'

const Articles = ({sortTopic, setSortTopic}) => {
const [articles, setArticles] = useState([])
const [users, setUsers] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)
useEffect(() => {
    getArticles().then((article) => {
        setArticles(article.articles)
        setLoading(false)
    }).catch(() => setError(true))
    getUsers().then((users) => setUsers(users.users)).catch(() => setError(true))
},[])



// getTopics().then((topics) => {
    
// })

if(error) {
    return (
        <Link to='*'>
        <Error />
        </Link>
    ) 
} else if (loading) {
    return <h1 className='loading-page'>Loading page</h1>
} else {

    return (
        <div>

      <Sorter articles={articles} setArticles={setArticles} />
       <ul>
           

       {articles.map((article) => {
           let image;
           for (let i = 0; i<users.length; i++) {
               if(article.author === users[i].username) {
                    image = users[i].avatar_url
               }
           }       
           return (




               
                   <li className="article" key={article.article_id}>
               <div className="article-div">
             <Link to={`${article.article_id}`}>
                 
                   <button className="article-body">


        <div className="single-parent">

        <div className="single-child-1">
     <h3>{article.title}</h3>

             {/* <Link to={`/articles/topic/${article.topic}`} >
        <button className="single-article-button">
        <p>{article.topic}</p>
            </button>
        </Link> */}
            </div>

                        <div className="single-child-2">
                        <img className="single-author-image" alt='broken' src={image}></img>
                            </div>
                         <h5 className="single-article-author">By {article.author}</h5>
                        </div>
             
                   <div>

                  <p>{article.body}</p>
                 
                   </div>
                  <p>comments: {article.comment_count}</p>
                  <p>votes: {article.votes} </p>
                 
                  <Moment>{article.created_at}</Moment>

                   </button> 
             </Link>            
               </div>
               </li>
               )
            })}
            </ul>
   </div>
        
    
    )
}
}

export default Articles;