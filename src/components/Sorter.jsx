
import {getSortArticle, getSortByAscDesc, getSortedTopics} from '../utils/api'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Sorter = ({articles, setArticles}) => {

    const sortArticles = (e) => {
      
        getSortArticle(e.target.value)
        .then((sorted) => {
            setArticles(sorted.articles)
        })
    
    }

    const sortByAscDesc = (e) => {
        getSortByAscDesc(e.target.value)
        .then((sorter) => {   
            setArticles(sorter.articles)
        })
    }

    // const sortTopic = (e) => {
    //     if(e.target.value === 'default'){
    //         return;
    //     } else {

    //         getSortedTopics(e.target.value)
    //         .then((topicSort) => {
    //             setArticles(topicSort.articles)
    //         })
    //     }
    // }
//     let cookingButton;
// if(topic !== 'cooking' ){
// cookingButton = 
// } else {
//     cookingButton = null
// }


return (
    <>
    <select name="sortby" id="sortby" onChange={sortArticles}>
    <option value="" disabled selected>Sort by</option>
    <option value="created_at">created</option>
    <option value="comment_count">comments</option>
    <option value="votes">votes</option>
  </select>
    <select name="sortby" id="sortby-desc-asc" onChange={sortByAscDesc}>
    <option value="" disabled selected>Order</option>
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

export default Sorter