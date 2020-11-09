import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

const Header = () => {
    return (
        <nav>
            <div className="brand">
<Link to="/">
Logo
</Link>
            </div>

            <div className="links">
               <Link to='/settings' >
<FontAwesomeIcon icon={faCog}/>
               </Link>
            </div>
        </nav>
    )
}

export default Header
