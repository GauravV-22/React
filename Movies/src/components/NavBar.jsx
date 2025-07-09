import '../css/NavBar.css';

const Navbar = () => {
  return (
    <div className = 'navBar'>
      <div className = 'leftNav'>
        <span className='logo'>MOVIES</span>
        <input type = 'text' placeholder = 'Search...' className='searchBox'/>
        <span className = 'item'>Home</span>
        <span className = 'item'>Live TV</span>
        <span className = 'item'>On Demand</span>
        <span className = 'item'>Discover</span>
      </div>
      <div className = 'rightNav'>
        <button className = 'signIn'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar;
