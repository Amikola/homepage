import { textColor } from "../../../services/color";
import styled from 'styled-components';


export const titleStyle = {
    color: textColor,
    textAlign: "center", 
    fontSize: 50
    
    
  };


export const picturStyle = {
    display: 'flex', 
    justifyContent: 'center',
    width: 500,
    height: 500,
    padding: 40
};

 export const ContentBox = styled.div`
 width: 700px; /* Set the desired width */
 padding: 10px;
 word-wrap: break-word; /* Allows text to break within the box */
 white-space: normal; /* Ensures text wraps within the box */
 font-size: 25px
`;


export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; /* Center items vertically */
    flex-direction: column; /* Ensure children are stacked vertically */
    text-align: center; /* Center text within the container */
`;


