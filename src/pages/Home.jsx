import { Link } from "react-router-dom"
import Avatar from '../assets/icon.png';
const Home = () => {
    return(
        <div className="body">
            <div className="home-container">
                <div className="intro">
                    Hello I am Christopher Napoles A Web/Software Developer
                </div>
                <div className="img-container">
                    <img className="img" src={Avatar}/>
                </div>
                <div className="btn">
                    <Link to={'/projects'} className="project-button">View Projects</Link>
                </div>
            </div>
        </div>
    )
}
export default Home