import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { highlight, textColor} from "../../services/color";

export const Nav = styled.nav`
    /* Controls the main bar color */ 
    background: ${highlight};
    height: 85px;
    display: flex;
    justify-content: center; /* Center the entire content */
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    /* Controls the main the text color */ 
    color: ${textColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
        text-decoration: underline;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: ${textColor};
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; /* Center the links inside the NavMenu */
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
