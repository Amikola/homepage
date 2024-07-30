import React from "react";

const Project = ({title, text, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Project;
