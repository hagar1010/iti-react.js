import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/demo-logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section>
         <h1>MOVIES</h1>
            <header>
                <nav>
                    <ul>
                        <img src={logo} alt="" />
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/MoviesList">Movies</NavLink></li> 
                        <li><NavLink to="/TVShows">TV Shows</NavLink></li>
                        <li>About</li>
                    </ul>
                    <div className="search">
                        <input type="text" />
                        <IoSearchOutline />
                    </div>
                </nav>
            </header>
    </section>
  )
}

export default Header