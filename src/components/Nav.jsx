import {Link} from 'react-router-dom'
// import {useContext} from 'react'

const Nav = () => {
    
    return (
        <nav>
            <Link className="nav" to='/'>Home</Link>
            <Link className="nav" to='/articles'>Articles</Link>
        </nav>
    )
}
export default Nav