import {Link} from 'react-router-dom'
// import {useContext} from 'react'

const Nav = () => {
    
    return (
            
        <nav className="navi">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link"  to='/articles'>📰</Link>
        </nav>

           
    )
}

export default Nav