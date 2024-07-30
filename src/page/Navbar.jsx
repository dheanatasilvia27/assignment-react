import '../css/navstyle.css'
const  Navbar = (props) => {
    return (
        <div>
            <div>
                <h1>{props.logo}</h1>
            </div>
        
        <div className='navbar-style'>
            <ul className='nav-menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Menu</a>
                </li>
                <li><a href='#'>About</a></li>
            </ul>
        </div>
        </div>
    )
}
export default Navbar