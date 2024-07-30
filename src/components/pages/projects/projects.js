import React from "react";
import { CenteredContainer, ContentBox } from "./projectsElements";
import Project from "./project";
import data from "./projectsData"

const Projects = () => {
    return (

        <CenteredContainer>

    
        <ContentBox>
            <p>This page contains information about projects and intresting stuff I have worked on in degreasing chronical order.</p> 
            {data.array.map((element, index) => (
                    <Project key={index} {...element} />
                ))}
        </ContentBox>
    
     
        
        </CenteredContainer>
    )
 }

export default Projects; 