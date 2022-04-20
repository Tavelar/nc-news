import { useEffect, useState } from "react";
import {getArticles, getUsers, getSortArticle, getSortByAscDesc} from '../utils/api'
import { Link } from 'react-router-dom'

const Sorter = ({setArticles}) => {

    const sortArticles = (e) => {
        console.log(e);
        getSortArticle(e.target.value)
        .then((sorted) => {
            setArticles(sorted.articles)
        })
    
    }

    const sortByAscDesc = (e) => {
        getSortByAscDesc(e.target.value)
        .then((sorter) => {
       //currently only functional for sorting created_by    
            setArticles(sorter.articles)
        })
    }


return (
    <>
    <select name="sortby" id="sortby" onChange={sortArticles}>
    <option value="created_at">created</option>
    <option value="comment_count">comments</option>
    <option value="votes">votes</option>
  </select>
    <select name="sortby" id="sortby-desc-asc" onChange={sortByAscDesc}>
          <option value='DESC'>descending</option>
          <option value='ASC'>ascending</option>
      </select>
    </>
)

}

export default Sorter