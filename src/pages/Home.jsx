import { Link } from "react-router-dom"
import Avatar from '../assets/icon.png';
import CV from '../assets/curriculum vitae.pdf';
const Home = () => {
    const openCv = () => {
        window.open(CV);
    }
    return(
        <div className="body">
            <div className="home-container">
                <div className="intro">
                    Hello I am Christopher Napoles A Web/Software Developer
                </div>
                <div className="img-container">
                    <img className="img" alt="avatar" src={Avatar}/>
                </div>
                <div className="btn-container">
                    <div className="btn">
                        <Link to={'/projects'} className="project-button">View Projects</Link>
                    </div>
                    <div className="btn">
                        <Link to={'/contact'} className="project-button">Contact Me</Link>
                    </div>
                    <div className="btn">
                        <Link to={'#'} className="project-button" onClick={openCv}>View CV</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home