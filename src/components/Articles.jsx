import { useEffect, useState } from "react";
import {getArticles, getTopics, getUsers, getSortedTopics} from '../utils/api'
import Sorter from "../components/Sorter"
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';

const Articles = ({sortTopic, setSortTopic}) => {
const [articles, setArticles] = useState([])
const [users, setUsers] = useState([])
useEffect(() => {
    getArticles().then((article) => setArticles(article.articles))
    getUsers().then((users) => setUsers(users.users))
},[])

getTopics().then((topics) => {
    console.log(topics);
})

// getSortedTopics().then((topic) => {

// })

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





               <div className="article-div">
             <Link to={`${article.article_id}`}>
                 
                   <button className="article-body">

               <li className="article" key={article.article_id}>

        <div className="single-parent">

        <div className="single-child-1">
     <h3>{article.title}</h3>
             <Link to={`/articles/topic/${article.topic}`} >
        <button className="single-article-button">
    <p>{article.topic}</p>
            </button>
            </Link>
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
                 
               </li>

                   </button> 
             </Link>            
               </div>
               )
            })}
            </ul>
   </div>
        
    
    )
}

export default Articles;