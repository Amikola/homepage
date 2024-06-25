import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,

} from "./navbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/cv" activeStyle>
                        CV
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/links" activeStyle>
                        Useful links
                    </NavLink>
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar;
