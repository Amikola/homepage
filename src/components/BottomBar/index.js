import React from 'react';
import { highlight} from "../../services/color";

const BottomBar = () => {
    const bottomBarStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: "2%",
        backgroundColor: highlight, // Solid color
        color: 'white',          // Text color
        textAlign: 'center',
        padding: '10px 0',       // Padding for spacing
    };

    return (
        <div style={bottomBarStyle}>
        </div>
    );
};

export default BottomBar;