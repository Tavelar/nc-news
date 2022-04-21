import {Link} from 'react-router-dom'
// import {useContext} from 'react'

const Nav = () => {
    
    return (
          <>
        
        <nav className="navi">
            <Link className="nav-link" to='/'>🏠Home</Link>
            <span className="nav-link">/</span>
            <Link className="nav-link"  to='/articles'>📰<span>Articles</span></Link>
           
        </nav>
       
          </>
    )
}

export default Nav