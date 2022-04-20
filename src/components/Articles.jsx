import { useEffect, useState } from "react";
import {getArticles, getUsers} from '../utils/api'
import { Link } from 'react-router-dom'
const Articles = () => {
const [articles, setArticles] = useState([])
const [users, setUsers] = useState([])
useEffect(() => {
    getArticles().then((article) => {
        
        setArticles(article.articles)
    })
},[])
useEffect(() => {
    getUsers().then((users) => {
       
        setUsers(users.users)
    })
},[])

    return (
        

   <div>
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


                  <h3>{article.title}</h3>
                 
             <h5><img className="author-image" src={image}></img>by {article.author}</h5>
             <Link to={`topics/${article.topic}`} >
             <button className="topic-button">
                  <p>{article.topic}</p>
             </button>
             </Link>
             <Link to={`${article.article_id}`}>
                   <button>
                  <p>{article.body}</p>
                  <p>{article.created_at}</p>
                   </button> 
             </Link>
                 
                  <p>comments: {article.comment_count}</p>
                  <p>votes: {article.votes} </p>
                 
               </li>
               )
            })}
            </ul>
   </div>
        
    
    )
}

export default Articles;