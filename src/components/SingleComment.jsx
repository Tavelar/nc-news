
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getSingleComment, deleteComment} from '../utils/api'
import DeletePopup from './DeletePopup'
import {Link} from 'react-router-dom'
import Error from './Error'
import Moment from 'react-moment';
const SingleComment = () => {
    const [popupDeleteButton, setPopupDeleteButton] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [comment, setComment] = useState([])
    const {comment_id} = useParams()

useEffect(() => {

    getSingleComment(comment_id).then((comment) => {
        setComment(comment)
        setLoading(false)
    }).catch(() => setError(true))
    
},[])

const handleDelete = (e) => {
    setPopupDeleteButton(true)
        deleteComment(e.target.value).then(() => {     
       setComment((currComments) => {
        console.log(currComments);
        const newComments = []
        for(let i=0; i<currComments.length; i++) {
            if(currComments[i].comment_id !== +e.target.value) {
                newComments.push(currComments[i])
            }
        }
        console.log(newComments);
        
        return newComments
    })
})
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

    let deleteButton;
        let deletePopup;
  
        if(comment.comment[0].author === 'grumpy19' && comment.comment !== undefined) {
            deleteButton = (
                <Link to={`/articles/${comment.comment[0].article_id}`}>
            <button  onClick={handleDelete} value={comment.comment[0].comment_id} 
            className="comment-delete-button">Delete</button>
            </Link>
            )
            deletePopup = <DeletePopup  trigger={popupDeleteButton} setTrigger={setPopupDeleteButton} />;
        } else {
            deleteButton = null
        }

return (
    <>

    <ul>
        <li className="article-comment" key={comment.comment[0].comment_id}>
            
           <p>{comment.comment[0].author}</p>
           <p>{comment.comment[0].body} </p>
           <p>{comment.comment[0].votes}</p>
                  {deleteButton}
                {deletePopup}
           
        </li>
    </ul>
    </>
)
}
}
export default SingleComment
