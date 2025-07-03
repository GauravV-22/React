import {NavLink} from 'react-router-dom'

export const NavBar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
                fontWeight: isActive?'bold':'normal',
                textDecoration: isActive?'none':'underlined',
        }
    }

    return (
        <div className = 'Nav'>
       <nav className ='navBar'>
            <h1>Event Pal</h1>
            <div className = 'navLinks'>
                <NavLink to='/' style={navLinkStyles}> Home  </NavLink>
                <NavLink to='/Create' style={navLinkStyles}> Create </NavLink>
                <NavLink to='/Bookmarks' style={navLinkStyles}> Bookmarks  </NavLink>
                <NavLink to='/Calendar' style={navLinkStyles}> Calendar  </NavLink>
            </div>   
       </nav>
       </div>
    )
}