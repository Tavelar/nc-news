import {Link} from 'react-router-dom'
import {useContext} from 'react'

const Nav = () => {
    
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/articles/topics/coding'>ok</Link>
        </nav>
    )
}
export default Nav