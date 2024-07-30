import React from "react";
import  {pictureStyle} from "./projectsElements"


const Project = ({ title, text, image }) => {
    

    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <div style={pictureStyle}>
                <img src={image} alt="Placeholder" />
    </div>
        </div>
    )
}

export default Project;
