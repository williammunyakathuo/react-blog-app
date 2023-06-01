import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/newblog" >New Blog</NavLink>
            </div>
        </div>
     );
}
 
export default Navbar;