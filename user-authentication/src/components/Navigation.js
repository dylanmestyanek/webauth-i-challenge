import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    const logout = () => {
        localStorage.removeItem('token');
    }

    return (
        <NavBar>
            <h2>this is THEE application</h2>
            <div>
                <NavLink to="/login" activeStyle={{ background: "#537ec5" }}>Log In</NavLink>
                <NavLink to="/register" activeStyle={{ background: "#537ec5" }}>Register</NavLink>
                <NavLink to="/dashboard" activeStyle={{ background: "#537ec5" }}>Dashboard</NavLink>
                <NavLink to="/login" onClick={logout}>Log Out</NavLink>
            </div>
        </NavBar>
    )
}

export default Navigation;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 40px;
    background: #465881;

    h2 {
        margin-top: 0;
        padding-left: 10px;
        color: white;
        text-shadow: 2px 2px 3px black;
    }

    div {
        display: flex;
        justify-content: space-evenly;
        // width: 30%;
        height: inherit;

        a {
            width: 100px;
            height: inherit;
            background: transparent;
            border: none;
            cursor: pointer;
            background: #465881;
            transition: .3 ease-in-out;
            text-align: center;
            text-decoration: none;
            color: white;
            line-height: 40px;
            text-shadow: 1px 1px 1px black;
            
            &:hover {
                background: #537ec5;
            }
        }
    }
`;