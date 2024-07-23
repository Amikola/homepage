import React from "react";
import { titleStyle, ContentBox, CenteredContainer, pictureStyle} from "./aboutElements";
import picture from "../../../services/images/me.jpg"


const About = () => {
    return (
    <CenteredContainer>

    <h1 style={titleStyle}>Welcome to Atte's homepage!</h1>

    <ContentBox>
    Hi everyone! I'm Atte Ikola, a third year computer science student at Aalto university and 
    this is my homepage. It's the largest collection of information about me and all things a find intresting/important.
    So if you have any questions please contact me! </ContentBox>

    <div style={pictureStyle}>
                <img src={picture} alt="Placeholder" />
    </div>
    
    </CenteredContainer>
)
 }

export default About; 