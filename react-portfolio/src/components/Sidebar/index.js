import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={'https://i.imgur.com/9YejLKh.png'} alt='logo'/>
        
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#ffdb58" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about ">
                <FontAwesomeIcon icon={faUser} color="#ffdb58" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#ffdb58" />
            </NavLink>
        </nav>
    </div>
)
  


export default Sidebar