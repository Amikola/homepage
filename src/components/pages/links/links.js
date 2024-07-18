import React from "react";
import {ContentBox, CenteredContainer} from "./linksElements.js";
import pdf from "../../../services/other/cv.pdf"


const Links = () => {
    return (

        <CenteredContainer>

    
        <ContentBox>
            <h1>Important Links:</h1>
            <p><a href="https://github.com/Amikola">Github </a></p>
            <p><a href="https://www.linkedin.com/in/atte-ikola-35941a263">Linkedin</a></p>
            <p><a href={pdf} download="AtteIkolaCV.pdf">CV</a></p>
        </ContentBox>
    
     
        
        </CenteredContainer>
    
    
    
    
    )
 }

export default Links; 