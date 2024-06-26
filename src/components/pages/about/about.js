import React from "react";
import { titleStyle } from "./aboutElements";
import picture from "../../../services/images/placeholder.png"

const About = () => {
    return (
    <div>

    <h1 style={titleStyle}>Welcome to Atte's homepage!</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,   
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={picture} alt="Placeholder" />
    </div>
    
    </div>
)
 }

export default About; 