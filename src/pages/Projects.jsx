import {projects as projectList} from "../components/Projects"
import { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

const Projects = () => {
    let i = 0;
    const [openView,setOpenView] = useState(false);
    const [showImage,setShowImage] = useState([]);

    const viewImage = (e) => {
        setOpenView(true);
        setShowImage([e]);
    }
    const closeViewImage = () => {
        setOpenView(false);
    }
    return(
        <div className="body list-body">
     
            {projectList.map((c) => {i++; return (
                <div className="list-container" key={i}>
                    <div className="proj-details">{i+ '. ' +c.name}</div>
                    <div className="proj-details">{c.description}</div>
                    <div className="proj-images-container">{c.img.map((e) => (<img src={e} className='proj-images' onClick={()=>viewImage(e)}/>))}</div>
                    <div className="proj-details">{c.details}</div>
                    {c.github ?
                        <div><a href={c.github} target='_blank' rel="noreferrer" className="proj-details">GitHub Link: {c.github}</a></div>
                        :
                        <div className="proj-details">GitHub Link: Private Repo</div>
                    }
                    <a href={c.link} target='_blank' rel="noreferrer" className="proj-details">Website Link: {c.link}</a>

                </div>              
            )})}
            {openView && (
                <ImageViewer
                    src={ showImage }
                    currentIndex={ 0 }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeViewImage}
                />
             )}
        </div>
    )
}
export default Projects