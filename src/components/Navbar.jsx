import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <Link to={'/MyPortfolio'} className="navbar-contents">Home</Link>
                <Link to={'/about'} className="navbar-contents">AboutMe</Link>
            </div>  
        </div>
    )
}
export default Navbar