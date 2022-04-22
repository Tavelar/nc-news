
import {getSortArticle, getSortByAscDesc} from '../utils/api'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Error from './Error'
const Sorter = ({setArticles}) => {
const [error, setError] = useState(false)
    const sortArticles = (e) => {
      
        getSortArticle(e.target.value)
        .then((sorted) => {
            setArticles(sorted.articles)
        }).catch(() => setError(true))
    
    }

    const sortByAscDesc = (e) => {
        getSortByAscDesc(e.target.value)
        .then((sorter) => {   
            setArticles(sorter.articles)
        }).catch(() => setError(true))
    }

if(error) {
    return (
        <Link to='*'>
        <Error />
        </Link>
    )

} else {

    
    return (
        <>
    <select value='' name="sortby" id="sortby" onChange={sortArticles}>
    <option value="" disabled >Sort by</option>
    <option value="created_at">created</option>
    <option value="comment_count">comments</option>
    <option value="votes">votes</option>
  </select>
    <select value='' name="sortby" id="sortby-desc-asc" onChange={sortByAscDesc}>
    <option value="" disabled >Order</option>
          <option value='DESC'>descending</option>
          <option value='ASC'>ascending</option>
      </select>

     <section>
         <span>

    <Link to={`/articles/topic/cooking`} ><button className="button-60"> Cooking </button></Link>
         </span>
         <span>

     <Link to={`/articles/topic/coding`} ><button className="button-60"> Coding </button></Link>
         </span>
         <span>
         <Link to={`/articles/topic/football`} ><button className="button-60"> Football </button></Link>
         </span>
     </section>
     
    
    </>
)

}
}

export default Sorter